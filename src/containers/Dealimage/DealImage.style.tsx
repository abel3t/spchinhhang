import styled from "styled-components"
import DealIMG from "../../image/deal3tr.png"

export const DealWrapper = styled.div`
  background-image: url(${DealIMG});
  background-size: cover;
  background-position: center bottom;
  text-align: center;
`
export const DealPrice = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 200px;
  padding-bottom: 12px;
  div {
    background-color: #643795;
    border-radius: 6px;
    color: #fff;
    padding: 6px;
  }
  @media only screen and (max-width: 480px) {
      margin-left: 0px;
  }
`
