import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import Buttons from '../../components/Button/Button'

export const ProductInformationWrapper = styled.div`
  background: ${themeGet('colors.white', '#ffffff')};
  box-shadow: 0px 5px 15px rgba(124, 133, 152, 0.1);
  border-radius: 10px;
  border: 1px solid #e8e9ef;
  margin-top: 24px;
  position: relative;
  .react-tabs {
    &__tab-panel {
      // padding-top: 16px;
    }
    &__tab-list {
      display: flex;
      border-bottom: 1px solid ${themeGet('colors.borderColor')};
      margin: 0;
      .react-tabs__tab {
        padding: 0;
        height: 58px;
        line-height: 58px;
        margin: 0 12px;
        color: ${themeGet('colors.darkPrimary')};
        font-size: 13px;
      }
      .react-tabs__tab--selected {
        border: 0;
        border-bottom: 1px solid ${themeGet('colors.primary')};
        color: ${themeGet('colors.primary')};
        font-family: ${themeGet('fontFamily.2')};
      }
    }
  }
`
export const Button = styled(Buttons)`
  .btn-text {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
`
export const DealCarouselWrapper = styled.div`
  background: ${themeGet('colors.white', '#ffffff')};
  box-shadow: 0px 5px 15px rgba(124, 133, 152, 0.1);
  border-radius: 10px;
  padding: 0 20px;
  position: relative;
`
