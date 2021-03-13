import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const DiscountPercent = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: #ffffff;
  line-height: 24px;
  background-color: ${(props) => themeGet(`colors.${props.color}`, '#D71F28')};
  padding: 2px 10px; 
  border-radius: 12px;
  &.top-right {
    position: absolute;
    top: 8px;
    right: 12px;
  }
  &.top-right-carousel {
    position: absolute;
    top: 22px;
    right: 22px;
  }
`
