import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const HighLightTitleWrapper = styled.h2`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
  color: ${themeGet('colors.white', '#fff')};
`

export const HighLightItemsWrapper = styled.div`
  box-sizing: border-box;
  margin-left: -8px;
  margin-right: -8px;
`

export const HighLightItemWrapper = styled.div`
  margin-bottom: 20px;
  > div {
    border-radius: 10px;
    text-align: center;
    background-color: ${themeGet('colors.white', '#ffffff')};
    padding-bottom: 16px;
    h4 {
      font-size: 13px;
    }

    .secondary-text {
      font-size: 12px;
    }

    .item-header {
      border-radius: 10px 10px 0 0;
      margin-bottom: 42px;
      position: relative;
      height: 230px;
      background-color: ${themeGet('colors.lightDarkColor')};
      .cover {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-positon: center center;
      }
      .logo {
        width: 60px;
        height: 60px;
        border-radius: 7.5px;
        border: 1px solid ${themeGet('colors.borderColor')};
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        -moz-transform: translate(-50%, 50%);
        -webkit-transform: translate(-50%, 50%);
        -ms-transform: translate(-50%, 50%);
        -o-transform: translate(-50%, 50%);
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    width: 20%;
    max-width: 20%;
  }
`
