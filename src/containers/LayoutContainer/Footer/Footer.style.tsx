import styled, { keyframes } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const FooterWrapper = styled.footer`
  .header-download-buttons {
    max-width: 300px;
  }
  .footer-social-links {
    display: flex;
    align-items: center;
  }
  .logo-footer {
    width: 48px;
    height: 55px;
  }
  .footer-text {
    line-height: 32px;
  }
  .address {
    strong {
      font-weight: bold;
    }
  }
  .ghost-btn {
    background-color: transparent;
    border: 0;
    outline: none;
  }
  .title {
    h6 {
      font-size: 20px;
    }
  }
  .line {
    width: 100%;
    border: 1px solid #dddddd;
  }

  .footer-copyright {
    color: #090e18;
    font-size: 14px;

    h6 {
      font-weight: bold;
    }
  }
`

export default FooterWrapper
