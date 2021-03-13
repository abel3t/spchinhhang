import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import Button from 'components/Button/Button'
export const PrevButtonWrapper = styled(Button)`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%,0);
    -moz-transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    -o-transform: translate(-50%,0);
    width: 44px;
    height: 44px;
    box-shadow: 0px 2px 4px rgba(9, 14, 24, 0.1);
    border-radius: 50%;
    background-color: ${themeGet('colors.white', '#ffffff')};
    &:hover {
        background-color: ${themeGet('colors.white', '#ffffff')};
    }
    @media screen and (max-width: 591px) {
        width: 28px;
        height: 28px;
    }
`
export const NextButtonWrapper = styled(Button)`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%,0);
    -moz-transform: translate(50%,0);
    -webkit-transform: translate(50%,0);
    -ms-transform: translate(50%,0);
    -o-transform: translate(50%,0);
    width: 44px;
    height: 44px;
    box-shadow: 0px 2px 4px rgba(9, 14, 24, 0.1);
    border-radius: 50%;
    background-color: ${themeGet('colors.white', '#ffffff')};
    &:hover {
        background-color: ${themeGet('colors.white', '#ffffff')};
    }
    @media screen and (max-width: 591px) {
        width: 28px;
        height: 28px;
    }
`

export const IndustryCarouselWrapper = styled.div`
  position: relative;
  .industry-carousel {
    background-color: ${themeGet('colors.white', '#ffffff')};
    border-radius: 10px;
  }
`

export const IndustryCarouselTitle = styled.h2`
  font-size: 24px;
  line-height: 29px;
  color: ${themeGet('colors.white', '#fff')};
  margin-bottom: 20px;
`

export const CarouselButtonGroupWrapper = styled.div``

export const CarouselItemsWrapper = styled.div`
    color: ${themeGet('colors.darkBold')};
`

export const CarouselItemWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;

  .product-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
  }
  .product-title {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
    color: ${themeGet('colors.darkBold')};
  }
  &:hover {
    border: 1px solid ${themeGet('colors.borderColor')};
    .product-title {
      font-family: ${themeGet('fontFamily.2')};
    }
  }
`
