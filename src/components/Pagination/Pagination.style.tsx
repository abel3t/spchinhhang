import styled from 'styled-components'
import Buttons from '../Button/Button'

export const PaginationWapper = styled.div`
  ul {
    display: flex;
    justify-content: center;
    .button-style {
      background: #ffffff;
      border: 1px solid #e8e9ef;
      box-sizing: border-box;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      text-align: center;
      margin-right: 8px;
      :hover {
        background: #d71f28;
        border-radius: 5px;
        color: #fff;
      }
    }
    .selected {
      background: #d71f28;
      border-radius: 5px;
      color: #fff;
    }
    .previous {
      background: #ffffff;
      border: 1px solid #e8e9ef;
      box-sizing: border-box;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      margin-right: 8px;
      display: none;
    }
    .next {
      background: #ffffff;
      border: 1px solid #e8e9ef;
      box-sizing: border-box;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      display: none;
    }
    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
    }
  }
`
