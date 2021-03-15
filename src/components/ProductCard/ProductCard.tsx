import React from 'react';
import Image from 'components/Image/Image';
import Button from '../Button/Button';
import { CartIcon } from '../AllSvgIcon';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo
} from './ProductCard.style';
import DiscountPercent from '../Discount/Discount';

type ProductCardProps = {
  title: string
  image: any
  weight: string
  currency: string
  description: string
  price: number
  salePrice?: number
  discountInPercent?: number
  data: any
  onClick?: (e: any) => void
  onChange?: (e: any) => void
  increment?: (e: any) => void
  decrement?: (e: any) => void
  cartProducts?: any
  addToCart?: any
  updateCart?: any
  value?: any
  deviceType?: any
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  weight,
  price,
  salePrice,
  discountInPercent,
  cartProducts,
  addToCart,
  updateCart,
  value,
  currency,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  onClick,
  ...props
}) => {
  const handleClick = (e: any) => {
    console.log('product cart click');
  };

  return (
    <ProductCardWrapper onClick={onClick} className="product-card">
      <ProductImageWrapper>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />
        {discountInPercent ? (
          <>
            <DiscountPercent
              discountInPercent={discountInPercent}
              className="top-right"
            />
          </>
        ) : (
          ''
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <h3 className="product-title">{title}</h3>
        <span className="product-weight">{weight}</span>
        <div className="product-meta">
          <div className="productPriceWrapper">
            {discountInPercent ? (
              <span className="discountedPrice">
                {currency}
                {price}
              </span>
            ) : (
              ''
            )}

            <span className="product-price">
              {currency}
              {salePrice ? salePrice : price}
            </span>
          </div>

          <Button
            title="Cart"
            intlButtonId="addCartButton"
            iconPosition="left"
            colors="primary"
            size="small"
            variant="outlined"
            className="cart-button"
            icon={<CartIcon/>}
            onClick={(e) => handleClick(e)}
          />
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
