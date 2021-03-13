import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const TrendingTitleWrapper = styled.h2`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
  color: ${themeGet('colors.darkBold')};
`

export const TrendingItemsWrapper = styled.div`
  border: 1px solid ${themeGet('colors.borderColor')};
  box-sizing: border-box;
  border-radius: 10px;
`

export const TrendingItemWrapper = styled.div`
    &:not(:last-of-type) {
        border-right: 1px solid ${themeGet('colors.borderColor')};
    }
`
