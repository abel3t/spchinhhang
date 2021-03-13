import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ProductDetailsWrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  /* min-height: 800px; */
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

export const ProductPreview = styled.div`
  width: 55%;
  padding: 24px 0 0 32px;
  position: relative;
  
  img {
    display: block;
    max-width: 100%;
    max-height: 450px;
    height: auto;
  }

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 24px 0 0 16px;
    order: 0;
  }
`;

export const ProductWholeSalePrice = styled.div``

export const ProductRetailPrice = styled.div``

export const Price = styled.strong`
  font-size: 24px;
  line-height: 29px;
  color: #090E18;
  display: block;
  &.hot {
    color: #D0021B;
  }
`

export const PriceDescription = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #8E8E93;
`

export const MonthSales = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid ${themeGet('colors.lightDarkColor')};
  @media (max-width: 767px) {
    padding: 24px 16px;
  }
`

export const ProductReview = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid ${themeGet('colors.lightDarkColor')};
  @media (max-width: 767px) {
    padding: 24px 16px;
  }
`

export const ProductColor = styled.button`
  height: ${props => props.height || 24}px;
  width: ${props => props.width || 24}px;
  border-radius: 3px;
  border: 0;
  outline: none;
  background-color: ${props => props.color};
  margin-left: 8px;
  position: relative;
  .checked-icon {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    -webkit-transform: translate(50%, -50%);
    -ms-transform: translate(50%, -50%);
    -moz-transform: translate(50%, -50%);
    -o-transform: translate(50%, -50%);
  }
  &.selected {
    border: 2px solid #D90000;
  }

`

export const ProductActions = styled.div``

export const BackButton = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 999;

  @media (max-width: 990px) {
    top: 20px;
    left: 25px;
  }
  .reusecore__button {
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.1', '13')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.darkRegular', '#77798C')};
    height: 30px;
    .btn-icon {
      margin-right: 5px;
    }
    .btn-text {
      padding: 0;
    }
  }
`;

export const FavoriteButton = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  position: absolute;
  top: 0px;
  right: 0px;
`

export const ProductInfo = styled.div`
  width: 45%;
  border-left: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};
  padding: 0 0 24px;

  @media (max-width: 990px) {
    padding: 0 0 24px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 0 24px;
    border: 0;
    order: 1;
  }
`;

export const SaleTag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background-color: #f4c243;
  padding: 0 10px;
  line-height: 24px;
  border-radius: 12px;
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const DiscountPercent = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  line-height: 24px;
  background-color: #fc5c63;
  padding-left: 20px;
  padding-right: 15px;
  position: relative;
  display: inline-block;
  position: absolute;
  bottom: 180px;
  right: -60px;

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 12px 0;
    border-color: transparent #fc5c63 transparent transparent;
  }

  &:after {
    content: '';
    position: absolute;
    left: -8px;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 8px;
    border-color: transparent transparent #fc5c63 transparent;
  }
`;

export const ProductTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: ${themeGet('fontSizes.4', '21')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const ProductWeight = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798C')};
`;

export const ProductDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkMedium', '#424561')};
  line-height: 2;
  margin-top: 30px;
  margin-bottom: 80px;
`;

export const ProductCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  @media (max-width: 767px) {
    padding: 24px 16px;
  }
`;

export const ProductPriceWrapper = styled.div`
  padding: 24px 32px;
  @media (max-width: 767px) {
    padding: 24px 16px;
  }
  border-bottom: 1px solid ${themeGet('colors.lightDarkColor')};
`;

export const ProductTotalPrice = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.3', '19')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.primary', '#009E7F')};
`;

export const SalePrice = styled.strong``;

export const ProductCartBtn = styled.div`
  margin-top: 4px;
  .reusecore__button {
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;

    .btn-icon {
      margin-right: 5px;

      svg {
        width: 14px;
        height: auto;
        @media (max-width: 990px) {
          width: 14px;
        }
      }
    }
  }
`;

export const ProductMeta = styled.div`
  margin-top: 60px;
`;

export const MetaSingle = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
`;

export const MetaItem = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  margin-right: 10px;
  background-color: ${themeGet('colors.lightColor', '#f7f7f7')};
  padding: 0 15px;
  border-radius: 6px;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RelatedItems = styled.div`
  margin-top: 70px;
  margin-left: 55px;
  margin-right: 55px;

  @media (max-width: 990px) {
    margin-top: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: ${themeGet('fontSizes.4', '21')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.darkBold', '#0D1136')};
    line-height: 1.2;
    margin-left: 15px;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-left: 0;
      margin-bottom: 25px;
    }
  }

  > div > div {
    flex: 0 0 20%;
    max-width: 20%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    @media (max-width: 1500px) {
      flex: 0 0 20%;
      max-width: 20%;
    }
    @media (max-width: 1400px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    @media (max-width: 1060px) {
      flex: 0 0 33.3333333%;
      max-width: 33.3333333%;
    }
    @media (max-width: 1199px) and (min-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 768px) {
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
    }
    @media (max-width: 767px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;
export const DealCarouselWrapper = styled.div`
  padding: 0 20px;
  margin-top: 32px;
  position: relative;
`
export const CarouselHeaderWrapper = styled.div`
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid ${themeGet('colors.lightDarkColor')};
  font-size: 20px;
`
export const CarouselButtonGroupWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 0;
  height: 60px;
  width: 100px;
  display: flex;
  > button {
    flex-grow: 1;
  }
`
export const CarouselItemWrapper = styled.div`
  padding: 16px;
  text-align: center;
  position: relative;
  &:hover {
    border-radius: 5px;
    border: 1px solid ${themeGet('colors.lightDarkColor')};
    background: ${themeGet('colors.white', '#ffffff')};
    box-shadow: 0px 10px 15px rgba(124, 133, 152, 0.1);
  }
  .product-img {
    width: 100%;
    height: 208px;
    object-fit: cover;
    margin-bottom: 16px;
  }
  .product-title {
    font-size: 16px;
    line-height: 20px;
    color: ${themeGet('colors.darkBold')};
    margin-bottom: 16px;
  }
  .product-price {
    font-size: 14px;
    line-height: 17px;
    color: ${themeGet('colors.darkBold')};
  }
`