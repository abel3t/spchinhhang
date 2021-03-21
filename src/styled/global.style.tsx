import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const TIMEOUT = 400;

export const InjectRTL = styled.div`
  ${({ lang }) =>
          (lang === 'ar' || lang === 'he') &&
          `
    font-family: 'Cairo', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    font-size: 14px;
  }

  .wrapper {
    padding: 0 60px;
    @media (max-width: 1400px) {
      // min-height: 100vh;
      padding: 0 40px;
    }

    @media (max-width: 1200px) {
      // min-height: 70vh;
    }

    @media (max-width: 1050px) {
      // min-height: 50vh;
    }

    @media (max-width: 991px) {
      padding: 0 15px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${themeGet('fontFamily.1', 'sans-serif')};
    margin: 0;
  }

  p, a, span, button, li, div {
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    margin: 0;
  }

  strong, .bold {
    font-family: ${themeGet('fontFamily.2', 'sans-serif')};
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .link {
    color: ${themeGet('colors.lightBlue')};
    font-size: 12px;
    line-height: 14px;
    text-decoration: none;
  }

  .ellipsis {
    display: -webkit-box !important;
    -webkit-line-clamp: 1 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    white-space: normal !important;
  }

  .ellipsis-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ellipsis-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .quick-view-overlay {
    background-color: rgba(0, 0, 0, .5)
  }

  .add-address-modal,
  .add-contact-modal {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.16);
    border-radius: 3px !important;

    .innerRndComponent {
      width: 100%;
      padding: 30px;
      height: auto;
      background-color: #f7f8f9;
      border: 0;
      box-sizing: border-box;
    }
  }

  .search-modal-mobile {
    transform: none !important;
    max-width: none !important;
    max-height: none !important;
    top: 0 !important;
    left: 0 !important;
    background: transparent;
    border-radius: 0 !important;
  }


  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
  }

  .page-transition-exit {
    opacity: 1;
  }

  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }

  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }

  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }

  .image-item {
    padding: 0 15px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    .image-item {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @media (max-width: 768px) {
    .image-item {
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
  }

  .rc-table-fixed-header .rc-table-scroll .rc-table-header {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;

    th {
      padding: 8px 20px;
    }
  }

  .drawer-content-wrapper {
    *:focus {
      outline: none;
    }
  }

  .rc-table-content {
    border: 0;
  }

  .data-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    &:focus,
    &:active {
      outline: none;
    }

    position: relative;

    .ic-left,
    .ic-right {
      transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      position: absolute;
      top: 50%;
    }

    .ic-left {
      left: 8px;
    }

    .ic-right {
      right: 8px;
    }
  }

  a {
    color: #0391FF;

    &:hover {
      text-decoration: none;
      color: #090e18;
    }
  }

  p {
    margin-bottom: 0;
  }

  .fa,
  .fas {
    font-weight: 600;
  }

  h1,
  .primary-title {
    font-size: 45px;
    font-family: 'SFRounded', sans-serif;
    line-height: 67px;
  }

  h2,
  .section-title {
    font-size: 32px;
    line-height: 38px;
  }

  h3,
  .sub-title {
    font-size: 24px;
    line-height: 29px;
  }

  h4,
  .sm-title {
    font-size: 20px;
    line-height: 28px;
  }

  strong,
  .bold {
    font-family: 'SFDisplay-Bold', sans-serif;
    font-weight: 400;
  }

  .sm-text {
    font-size: 16px;
  }

  .primary-text {
    color: #eb2025;
  }

  .secondary-text {
    color: #686464;
  }

  .body-text {
    color: #090e18;
  }

  .black-btn {
    background-color: #090e18;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    width: 100%;
    max-width: 200px;
    color: #fff;
    border: 0;
    outline: none;
  }

  .ghost-btn {
    background-color: transparent;
    border: 0;
    outline: none;
  }

  .title-divider {
    height: 1px;
    width: 80px;
    margin: 0 auto;
    background-color: #eb2025;
    margin-top: 16px;
  }

  .lh-32 {
    line-height: 32px;
  }

  .lh-24 {
    line-height: 24px;
  }

  .lh-20 {
    line-height: 20px;
  }

  .lh-17 {
    line-height: 17px;
  }

  .sub-feature {
    color: #eb2025;
  }

  .fs-20 {
    font-size: 20px;
  }

  .pb-20 {
    padding-bottom: 20px;
  }

  .fs-14 {
    font-size: 14px;
  }

  .fs-13 {
    font-size: 13px;
  }

  .row-start {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .row-end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .row-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .row-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-lightgray {
    color: ${themeGet('color.lightgray', '#8E8E93')};
  }

  @media screen and (min-width: 576px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }

  @media screen and (min-width: 1200px) {
    .container {
      max-width: 1200px;
    }
  }


`;
