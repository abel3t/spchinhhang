import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const CarouselHeaderWrapper = styled.div`
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid ${themeGet('colors.lightDarkColor')};
  font-size: 20px;
  color: #EB2025;
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

export const DealCarouselWrapper = styled.div`
  background: ${themeGet('colors.white', '#ffffff')};
  box-shadow: 0px 5px 15px rgba(124, 133, 152, 0.1);
  border-radius: 10px;
  padding: 0 20px;
  position: relative;
`
