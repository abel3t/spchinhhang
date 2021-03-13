import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import Button from "components/Button/Button"

export const BackButton = styled(Button)`
  background-color: transparent;
  color: #000000;
  position: absolute;
  top: 12px;
  left: 0;
`

export const ProductPriceWrapper = styled.div`
  margin-bottom: 20px;
  .price {
    text-decoration-line: line-through;
    color: #9d9da1;
    margin-right: 12px;
  }
`

export const ProductConfigWrapper = styled.div`
  position: relative;
  padding: 24px 20px;
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 26px;
`

export const Section = styled.div`
  margin-bottom: 20px;
  .title {
    margin-bottom: 8px;
  }
  .option-dropdown {
    color: #000;
    width: 100%;
    max-width: 180px;
    .popover-handler {
      width: 100%;
      > button {
        .btn-text {
          font-family: ${themeGet("fontFamily.2", "sans-serif")};
          font-size: 12px;
        }
        .btn-icon {
          svg {
            path {
              fill: #000;
            }
          }
        }
      }
    }
  }
`

export const RadioOption = styled.div`
  margin-right: 24px;
  cursor: pointer;
  .radio-btn {
    background-color: transparent;
    width: 20px;
    height: 20px;
    border: 1px solid #c7c7cd;
    border-radius: 50%;
    margin-right: 16px;
    &.selected {
      border: 4px solid #0076ff;
    }
  }
`
