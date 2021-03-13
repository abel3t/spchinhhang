import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import Buttons from "components/Button/Button"
const OrderBox = styled.div`
  width: calc(100% - 330px);
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 1199px) {
    width: 100%;
    padding: 0 20px;
  }
`

const OrderListWrapper = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeGet("colors.borderColor", "#f1f1f1")};
  flex-shrink: 0;
  margin-right: 30px;
  overflow: hidden;

  @media only screen and (max-width: 1199px) {
    width: 310px;
    margin-right: 20px;
  }
`

const OrderList = styled.div`
  width: 100%;
  padding: 0 20px 20px;

  @media (max-width: 767px) {
    padding: 0;
  }

  .rc-collapse {
    background-color: transparent;
    border-radius: 0;
    border: 0;

    > .rc-collapse-item {
      margin-bottom: 15px;
      background-color: ${themeGet("colors.lightColor", "#F7F7F7")};
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      flex-shrink: 0;
      border: 1px solid transparent;

      &.rc-collapse-item-active {
        background-color: #ffffff;
        border: 1px solid ${themeGet("colors.borderColor", "#f1f1f1")};
      }

      > .rc-collapse-header {
        padding: 0;
        outline: 0;
      }

      .rc-collapse-content {
        padding: 0px;
        > .rc-collapse-content-box {
          box-sizing: border-box;
          padding: 0px;
          margin: 0;
        }
      }
    }
  }
`

const OrderDetailsWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 190px);
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeGet("colors.borderColor", "#f1f1f1")};
`

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: ${themeGet("fontSizes.4", "21")}px;
  font-weight: ${themeGet("fontWeights.6", "700")};
  color: ${themeGet("colors.darkBold", "#0D1136")};
  margin: 25px 0;
`

// Invoice Table design
const ImageWrapper = styled.span`
  width: 75px;
  height: 75px;
  display: flex;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ItemWrapper = styled.span`
  display: flex;
  align-items: center;
`

const ItemDetails = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

const ItemName = styled.span`
  font-family: "Lato", sans-serif;
  font-size: ${themeGet("fontSizes.2", "15")}px;
  font-weight: ${themeGet("fontWeights.6", "700")};
  color: ${themeGet("colors.darkBold", "#0D1136")};
  margin-bottom: 5px;
`
const ItemSize = styled("span")`
  font-family: "Lato", sans-serif;
  font-size: ${themeGet("fontSizes.1", "13")}px;
  font-weight: ${themeGet("fontWeights.3", "400")};
  color: ${themeGet("colors.darkRegular", "#77798c")};
  margin-bottom: 5px;
`
const ItemPrice = styled("span")`
  font-family: "Lato", sans-serif;
  font-size: ${themeGet("fontSizes.1", "13")}px;
  font-weight: ${themeGet("fontWeights.3", "400")};
  color: ${themeGet("colors.primary", "#009E7F")};
`

const TotalPrice = styled.span`
  font-family: "Lato", sans-serif;
  font-size: ${themeGet("fontSizes.2", "15")}px;
  font-weight: bold;
  color: ${themeGet("colors.darkBold", "#0D1136")};
`

const NoOrderFound = styled.span`
  font-family: "Lato", sans-serif;
  font-size: ${themeGet("fontSizes.2", "15")}px;
  font-weight: ${themeGet("fontWeights.3", "400")};
  color: ${themeGet("colors.darkRegular", "#77798c")};
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ItemCards = styled.div`
  width: 100%;
  // padding: 15px 0;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  margin-bottom: 1px;
  box-sizing: border-box;
  // &:not(:last-of-type) {
  //   border-bottom: 1px solid #e8e9ef;
  // }
  border-radius: 10px;
`
const ItemImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.cart-view {
    width: 60px;
    height: 60px;
    @media screen and (min-width: 768px) {
      width: 140px;
      height: 140px;
      margin-right: 32px;
    }
  }
`
const ItemTitle = styled.p`
  color: ${themeGet("colors.darkBold", "#090E18")};
  &.cart-view {
    margin-bottom: 6px;
  }
`
const ItemProps = styled.div`
  margin-bottom: 8px;
`
const ItemProvider = styled.div`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.285714px;
  color: ${themeGet("colors.darkPrimary")};
`

const BuyLaterButton = styled.button`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.285714px;
  color: ${themeGet("colors.darkPrimary")};
  transition: all 0.4s ease;
  background-color: transparent;
  border: 0;
  display: inline-block;
  margin-right: 15px;
  padding: 0;
`
const ItemRight = styled.div`
  .quantity {
    width: 115px;
    height: 38px;
  }
`
const ItemPriceDiscount = styled.strong`
  font-size: ${themeGet("fontSizes.2", "15")}px;
  color: #9d9da1;
  margin-bottom: 10px;
  margin-left: 8px;
  text-decoration: line-through;
  &.cart-view {
    color: ${themeGet("colors.darkPrimary", "#686464")};
    font-size: 10px;
    line-height: 12px;
  }
`
const Button = styled(Buttons)`
  &.historyorder {
    background-color: #fff;
    border: 1px solid #e8e9ef;
    box-sizing: border-box;
    border-radius: 10px;
    .btn-text {
      color: #686464;
    }
  }
`
export {
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemPrice,
  TotalPrice,
  NoOrderFound,
  ItemCards,
  ItemImgWrapper,
  ItemTitle,
  ItemProps,
  ItemProvider,
  BuyLaterButton,
  ItemRight,
  ItemPriceDiscount,
  Button
}
