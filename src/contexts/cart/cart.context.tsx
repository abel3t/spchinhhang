import { createContext } from 'react';
import { Product, Coupon } from 'interfaces';

interface Products {
  products: Product[];
}

interface ContextProps extends Products {
  cartState: any;
  dispatch: any;
  totalPrice: number;
  discount: number;
  add: Function;
  update: Function;
  coupon: Coupon;
  addCoupon: Function;
  removeCoupon: Function;
  subtotalPrice: any;
  clearCart: Function;
}

export const CartContext = createContext({} as ContextProps);
