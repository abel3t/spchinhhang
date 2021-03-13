import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import Buttons from 'components/Button/Button'

export const ProductReviewWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e8e9ef;
  box-sizing: border-box;
  border-radius: 10px;
`
export const Input = styled.input`
  width: 60%;
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

  @media (max-width: 480px) {
    width: 100%;
  }
  &:hover,
  &:focus {
    outline: 0;
  }
  &:focus {
    border-color: ${themeGet('colors.primary', '#009e7f')};
  }

  &::placeholder {
    color: #686464;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
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
export const TextReviewInput = styled.div`
  textarea {
    height: auto;
    min-height: 171px;
    padding: 10px 18px 0px;
    resize: none;
    width: 60%;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    border: 1px solid ${themeGet('colors.borderColor', '#E6E6E6')};
    border-radius: 6px;

    @media (max-width: 480px) {
      width: 100%;
    }
    &::placeholder {
      color: #686464;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
    }
    &.hover,
    &:focus {
      outline: 0;
      border-color: ${themeGet('colors.primary', '#E6E6E6')};
    }
  }
`
export const Button = styled(Buttons)`
  &.send-review {
    background: ${themeGet('colors.primary', '#E6E6E6')};
  }
  .btn-text {
    font-size: 14px;
    line-height: 17px;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .btn-icon{
    color:#fff;
  }
  box-sizing: border-box;
  border-radius: 10px;
  height: 40px;
`
export const ButtonSelectImage = styled.div`
  width: 100%;
  max-width: 208px;
  background: #fff;
  color: #d90000;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 14px;
  line-height: 17px;
  border: 1px solid #e21838;
  height: 40px;
  svg{
  background: ${themeGet('colors.primary', '#E6E6E6')};
  }
  div{
    .title{
      margin-bottom: 0;
    }
  }
`
export const ButtonSelect = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0.01;
  cursor: pointer;
`