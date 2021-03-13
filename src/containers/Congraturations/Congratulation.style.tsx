import styled from "styled-components"
import Congatulation from "../../image/congatulation.png"
import Buttons from "../../components/Button/Button"
import { themeGet } from "@styled-system/theme-get"
export const CongratulationsWapper = styled.div`
  background-color: #fff;
`
export const BgCongratulation = styled.div`
  background-image: url(${Congatulation});
  text-align: center;
  background-position: top center !important
`
export const Button = styled(Buttons)`
  &.money {
    background-color: #648ae1;
    .btn-text {
      font-family: "SFDisplay-Bold", sans-serif !important;
      font-size: 24px;
      line-height: 29px;
    }
    &.order {
      .btn-text {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`
