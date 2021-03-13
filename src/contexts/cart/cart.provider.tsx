import Currency from 'currency.js';
import React, { useState, useReducer } from 'react';
import { getLocalState, setLocalState } from 'helper/localStorage';
import { cartAnimation } from 'helper/utility';
import { Product, Coupon } from 'interfaces';
import { CartContext } from './cart.context';

const initialState = {
  isOpen: false,
};

function reducer(cartState: any, action: any) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...cartState,
        isOpen: !cartState.isOpen,
      };
    default:
      return cartState;
  }
}

const getCartProducts = () => {
  const products = getLocalState('cart');
  return products ? products : [];
};

const getTotalPrice = () => {
  const price = getLocalState('totalPrice');
  return price ? price : 0;
};

const getCoupon = () => {
  const coupon = getLocalState('coupon');

  if (coupon) return coupon;

  return {
    id: 0,
    code: 'DEFAULT_COUPON',
    discountInPercent: 0,
  };
};
const getDiscount = () => {
  const discount = getLocalState('discount');
  return discount ? discount : 0;
};

export const CartProvider = (props: any) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState(getCartProducts() as Product[]);
  const [totalPrice, setTotalPrice] = useState(getTotalPrice() as number);
  const [subtotalPrice, setSubTotalPrice] = useState(getTotalPrice() as number);
  const [coupon, setCoupon] = useState(getCoupon() as Coupon);
  const [discount, setDiscount] = useState(getDiscount() as number);
  const setPrice = (coupon = getCoupon()) => {
    const price = calculateTotalPrice(products, coupon);
    setLocalState('totalPrice', price);
    setTotalPrice(price);
  };
  const calculateTotalPrice = (products: Product[], coupon: Coupon): number => {
    let total = Currency(0);
    let finalTotal;
    products.forEach(product => {
      const quantity = product.quantity ? product.quantity : 1;
      const price = product.salePrice ? product.salePrice : product.price;
      const itemPrice = Currency(quantity).multiply(price);
      total = Currency(total).add(itemPrice);
    });
    finalTotal = Number(total.value);
    setLocalState('subTotalPrice', finalTotal);
    setSubTotalPrice(finalTotal);
    if (coupon.discountInPercent) {
      const discount = (finalTotal * Number(coupon.discountInPercent)) / 100;
      setLocalState('discount', discount);
      setDiscount(discount);
      finalTotal = finalTotal - discount;
    }
    return finalTotal;
  };
  const add = (event, item: Product, value: number) => {
    // TODO: cookie storage
    if (products.length) {
      const index = products.findIndex(product => product.id === item.id);
      if (index !== -1) {
        // if product already available in the cart
        const product = products[index];
        const quantity = product.quantity ? product.quantity : 0;
        products[index] = { ...product, ...item, quantity: quantity + (value || 1) };
      } else {
        // if this product is not available in the cart
        products.push({ ...item, quantity: value || 1 });
      }
    } else {
      // if the cart is empty
      products.push({ ...item, quantity: value || 1 });
    }

    cartAnimation(event);

    setLocalState('cart', products);
    setProducts([...products]); // have to use the shallow copy [...products]
    setPrice();
  };

  const addCoupon = (coupon: Coupon) => {
    setLocalState('coupon', coupon);
    setCoupon(coupon);
    setPrice(coupon);
  };

  const removeCoupon = () => {
    setLocalState('coupon', {
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0,
    });
    setLocalState('discount', 0);
    setCoupon({
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0,
    });
    setPrice({
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0,
    });
  };

  const update = (itemId: any, quantity: number) => {
    const index = products.findIndex(product => product.id === itemId);
    if (quantity < 1 && index > -1) {
      // delete if quantity, 0
      products.splice(index, 1);
    } else {
      // update quanity
      const product = products[index];
      products[index] = { ...product, quantity };
    }

    setLocalState('cart', products);
    setProducts([...products]);
    if (!products.length) {
      setLocalState('coupon', {
        id: 0,
        code: 'DEFAULT_COUPON',
        discountInPercent: 0,
      });
      setLocalState('discount', 0);
      setDiscount(0);
      setCoupon({
        id: 0,
        code: 'DEFAULT_COUPON',
        discountInPercent: 0,
      });
    }
    setPrice();
  };

  const clearCart = () => {
    setLocalState('cart', []);
    setProducts([]);
    setLocalState('discount', 0);
    setDiscount(0);
    setCoupon({
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0,
    });
    setLocalState('coupon', {
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0,
    });
    // setPrice();
    setLocalState('totalPrice', 0);
    setTotalPrice(0);
    setLocalState('subTotalPrice', 0);
    setSubTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        dispatch,
        products,
        add,
        update,
        totalPrice,
        addCoupon,
        coupon,
        discount,
        removeCoupon,
        subtotalPrice,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
