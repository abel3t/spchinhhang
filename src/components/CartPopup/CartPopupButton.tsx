import React from 'react';
import {
  CartPopupButtonStyled,
  ButtonImgBox,
  ItemCount,
  PriceBox,
  CountButton,
  PriceBoxAlt,
  TotalItems
} from './CartPopup.style';
import { ShoppingBag, CartIcon } from '../AllSvgIcon';

type CartButtonProps = {
  style?: React.CSSProperties
  itemCount?: number
  itemPostfix?: any
  price?: number
  pricePrefix?: string
  className?: string
  onClick?: (e: any) => void
}

const CartPopupButton: React.FC<CartButtonProps> = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className
}) => (
  <CartPopupButtonStyled style={style} onClick={onClick} className={className}>
    <ButtonImgBox>
      <ShoppingBag width={24} height={24}/>
    </ButtonImgBox>
    <ItemCount>
      {itemCount} {itemPostfix}
    </ItemCount>
    <PriceBox>
      {pricePrefix}
      {/* {price} */}
      {parseFloat(`${price}`).toFixed(2)}
    </PriceBox>
  </CartPopupButtonStyled>
);

export const BoxedCartButton: React.FC<CartButtonProps> = ({
  itemCount,
  // itemPostfix = 'items',
  // price,
  // pricePrefix = '$',
  style,
  onClick,
  className
}) => (
  <CountButton style={style} onClick={onClick} className={className}>
    {/* <img src={CartIcon} alt="Cart" /> */}
    <CartIcon/>
    <span className="item-count">{itemCount}</span>
    {/* <TotalItems>
      <ShoppingBag />
      {itemCount} {itemPostfix}
    </TotalItems>
    <PriceBoxAlt>
      {pricePrefix}
      {parseFloat(`${price}`).toFixed(2)}
    </PriceBoxAlt> */}
  </CountButton>
);

export default CartPopupButton;
