import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import Buttons from 'components/Button/Button'

export const Row = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing:border-box;
    background-color:#fff;
    border-radius: 10px;
   
`

export const Button = styled(Buttons)`
  &.google {
    background-color: #de4b32;
  }

  &.facebook {
    background-color: #3c5998;
    margin-bottom: 10px;
  }
  .btn-text{
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
  }
  &.sign-up-free {
    background-color: #fff;
    border: 2px solid #ff3400;
    box-sizing: border-box;
    border-radius: 10px;
    .btn-text{
      font-family: ${themeGet('fontFamily.2', 'sans-serif')};
    }
  }
  &.icon-right{
    position:relative;
   .btn-icon {
    position:absolute;
    right:10px;
   }
  }
  &.icon-left{
    position:relative;
    .btn-icon{
      position: absolute;
      left: 19px;
    }
  }
`

export const Wrapper = styled.div`
  text-align: center;
  background-color: #fff;
`

export const Container = styled.div`
  padding: 40px 24px 0;

  @media (max-width: 768px) {
    padding: 25px 30px 0;
  }
`

export const LogoWrapper = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 160px;
  }
`

export const Heading = styled.h3`
  color: ${themeGet('colors.darkBold', '#009E7F')};
  margin-bottom: 10px;
  // font-family: 'Poppins', sans-serif;
  font-size: ${themeGet('fontSizes.7', '20')}px;
  font-weight: bold;
  text-align: left;
`

export const SubHeading = styled.span`
  margin-bottom: 30px;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798c')};
  display: block;
`

export const OfferSection = styled.div`
  padding: 20px;
  background-color: ${themeGet('colors.lightColor', '#F7F7F7')};
  color: ${themeGet('colors.primary', '#009E7F')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Offer = styled.div`
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  margin: 0;
`

export const HelperText = styled.div`
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colors.darkRegular', '#77798c')};
  margin: 0;
  text-align: center;
  width: 100%;

  a {
    font-weight: 700;
    color: #4285f4;
    text-decoration: underline;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid ${themeGet('colors.borderColor', '#E6E6E6')};
  font-size: 13px;
  font-weight: 500;
  color: #686464;
  line-height: 16px;
  padding: 0 18px;
  box-sizing: border-box;
  transition: border-color 0.25s ease;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:focus {
    border-color: ${themeGet('colors.primary', '#009e7f')};
  }

  &::placeholder {
    color:#686464 ;
    font-size: 14px;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.disabled {
    .inner-wrap {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`

export const Divider = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    // font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.3', '400')};
    color: ${themeGet('colors.darkBold', '#0D1136')};
    line-height: 1;
    background-color: #fff;
    z-index: 1;
    position: relative;
    padding: 0 10px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${themeGet('colors.borderColor', '#E6E6E6')};
    position: absolute;
    top: 50%;
  }
`

export const LinkButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  box-shadow: none;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${themeGet('colors.primary', '#009E7F')};
  text-decoration: underline;
  cursor: pointer;
`
export const Text= styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12.0264px;
  line-height: 21px;
  color: #090E18;
`
export const Decription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.457143px;
  color: #090E18;
`