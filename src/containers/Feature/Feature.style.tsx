import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const FeatureContent = styled.div`
  .fill {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const FeatureCol = styled.div`
  margin-top: 16px;
  align-self: stretch;
  p {
    color: ${themeGet('colors.darkPrimary')};
  }
  .feature-col {
    height: 100%;
    border: 1px solid #e8e9ef;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: left;
    display: flex;
    padding: 0 12px;
    align-items: center;
    margin-bottom: 20px;
    .logo-feature {
      width: 36px;
      height: auto;
      margin-right: 16px;
    }
    :hover {
      border: 1px solid #d71f28;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
  padding: 0;
  @media screen and (min-width: 768px) {
    padding: 0 8px;
    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
    
  }
  @media screen and (min-width: 1200px) {
    width: 20%;
    max-width: 20%;
    margin-bottom: 0;
  }
`
export { FeatureContent, FeatureCol }
