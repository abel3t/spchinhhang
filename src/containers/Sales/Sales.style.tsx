import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

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

export const HighlightItemWrapper = styled.div`
  position: relative;
  min-height: 320px;
  height: 100%;
  .product-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
  .title-section {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    width: 92%;
    background-color: rgba(0, 119, 255, 0.7);
    padding: 24px 0;
    text-align: center;
    color: ${themeGet('colors.white', '#fff')};
    &.woman {
        background-color: rgba(255, 91, 121, 0.7);
    }
    .title {
      margin-bottom: 4px;
      font-size: 24px;
      line-height: 29px;
    }
    .view-more-button {
      font-size: 16px;
      line-height: 20px;
    }
  }
`

export const CarouselItemWrapper = styled.div`
  padding: 16px;
  text-align: center;
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

export const SalesWrapper = styled.div`
  border-radius: 10px;
  padding: 0 20px;
  position: relative;
  .highlight-left {
    .react-multi-carousel-track {
      height: 100%; 
    }
    @media screen and (min-width: 1200px) {
      width: 40%;
      max-width: 40%;
    }
  }
  .highlight-right {
    @media screen and (min-width: 1200px) {
      width: 60%;
      max-width: 60%;
    }
  }
`
