import styled from 'styled-components'
import { alignItems, boxShadow } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { buttonStyle, colorStyle, buttonSize } from '../helpers/customVariant'

type ButtonStyleProps = {
  fullwidth?: boolean
  colors?: 'primary' | 'secondary'
  variant?:
    | 'textButton'
    | 'outlined'
    | 'outlinedDash'
    | 'outlinedFab'
    | 'extendedOutlinedFab'
    | 'fab'
    | 'extendedFab'
}

const ButtonStyle = styled('button')<ButtonStyleProps>`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #D0021B;
  height: ${themeGet('heights.3', '48')}px;
  width: ${(props) => (props.fullwidth ? '100%' : 'auto')};
  color: ${(props) =>
    props.variant === 'textButton' ||
    props.variant === 'outlined' ||
    props.variant === 'outlinedDash' ||
    props.variant === 'outlinedFab' ||
    props.variant === 'extendedOutlinedFab'
      ? '#222222'
      : '#ffffff'};
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  text-decoration: none;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 16px;
  padding-right: 16px;
  border: 0;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &.outline-primary {
    color: ${themeGet('colors.darkBold')};
    border-color: ${themeGet('colors.primary')};
    // border: none
  }
  &.account-btn{
    border:1px solid #C0D1E0;
  }
  &.outline-none{
    border:none;
  }

  span.btn-text {
    // font-family: ${themeGet('fontFamily.2', 'sans-serif')};
    padding-left: ${themeGet('space.1', '4')}px;
    padding-right: ${themeGet('space.1', '4')}px;
    white-space: nowrap;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
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

  &:focus {
    outline: none;
  }

  &.disabled{
    color: ${themeGet('colors.labelColor', '#767676')};
    background-color: ${themeGet('colors.borderColor', '#E6E6E6')};
    border-color: ${themeGet('colors.borderColor', '#E6E6E6')};

    &:hover{
      color: ${themeGet('colors.labelColor', '#767676')};
      background-color: ${themeGet('colors.borderColor', '#E6E6E6')};
      border-color: ${themeGet('colors.borderColor', '#E6E6E6')};
    }
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet('space.2', '8')}px;
      padding-right: ${themeGet('space.2', '8')}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${colorStyle}
  ${buttonStyle}
  ${buttonSize}
`

ButtonStyle.displayName = 'ButtonStyle'

export default ButtonStyle
