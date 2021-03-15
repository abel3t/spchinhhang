import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Buttons from '../../components/Button/Button';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

const hideSearch = keyframes`
  from {
    display: none;
  }

  to {
    display: flex;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;

  height: 70px;

  padding: 18px 85px 10px;

  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
  background-color: ${themeGet('colors.primary')};
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &.home {
    position: absolute;
    background-color: transparent;
    box-shadow: none;
  }

  @media (max-width: 1400px) {
    padding: 0px 40px ;
  }

  @media (max-width: 990px) {
    display: none;
  }

  .headerSearch {
    margin: 0 30px;

    form {
      flex-direction: row;
    }

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
      margin: 0 15px;

      input {
        width: 80%;
      }

      .buttonText {
        display: none;
      }
    }
  }

  &.unSticky {
    display: none;
    animation: ${positionAnim} 0.3s ease;

    .headerSearch {
      animation: ${hideSearch} 0.3s ease;
      display: none;
    }
  }

  &.sticky {
    background-color: #ffffff;
    position: fixed;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    padding-top: 20px;
    padding-bottom: 20px;

    @media (max-width: 1400px) {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .headerSearch {
      display: flex;

      form {
        background-color: ${themeGet('colors.lightMediumColor', '#F3F3F3')};

        input {
          background-color: ${themeGet('colors.lightMediumColor', '#F3F3F3')};
        }
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
        .buttonText {
          display: none;
        }
      }
    }
  }

  .popover-wrapper {
    .popover-content {
      padding: 20px 0;

      .menu-item {
        a {
          margin: 0;
          padding: 12px 30px;
          border-bottom: 1px solid ${themeGet('colors.lightColor', '#F7F7F7')};
          cursor: pointer;

          &:last-child {
            border-bottom: 0;
          }

          &:hover {
            color: ${themeGet('colors.primary', '#009E7F')};
          }

          &.current-page {
            color: ${themeGet('colors.primary', '#009E7F')};
          }

          .menu-item-icon {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .headerSearch {
    input {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: 15px;
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
      }
    }

    button {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: 15px;
      }
    }
  }
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  div {
    &:nth-of-type(2) {
      margin-left: 32px;
      margin-right: 32px;
    }

    a {
      font-size: 13px;
      color: ${themeGet('colors.darkPrimary')};
    }
  }
`;

const Logo = styled.span`
  font-family: "Lato", sans-serif;
  color: ${themeGet('colors.darkBold', '#0D1136')};
  //   font-size: 26px;
  font-weight: bold;
  cursor: pointer;

  a {
    font-family: "Lato", sans-serif;
    color: ${themeGet('colors.darkBold', '#0D1136')};
    font-size: 26px;
    font-weight: bold;
  }

  span {
    color: #029e7f;
  }

  img {
    display: block;
    backface-visibility: hidden;
    max-width: 150px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 13px;
  padding-right: 30px;

  .v-divider {
    margin-left: 20px;
    margin-right: 20px;
  }

  a {
    color: ${themeGet('colors.darkPrimary')};
  }

  .menu-icon {
    min-width: 14px;
    margin-right: 7px;
  }

  .menu-item {
    a {
      font-size: ${themeGet('fontSizes.2', '15')}px;
      font-weight: ${themeGet('fontWeights.6', '700')};
      color: ${themeGet('colors.darkBold', '#0D1136')};
      line-height: 1.2em;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      margin-right: 45px;

      @media (max-width: 1400px) {
        margin-right: 35px;
        font-size: 15px;
      }

      &:hover {
        color: ${themeGet('colors.primary', '#009E7F')};
      }
    }
  }

  .user-pages-dropdown {
    .popover-handler {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      // overflow: hidden;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .popover-content {
      .inner-wrap {
        padding: 2px;
      }
    }
  }
`;
const Button = styled(Buttons)``;
const StyledButton = styled.button`
  background: #ffffff;
  border: 1px solid #d71f28;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 11px;
  line-height: 13px;

  &.membership {
    border: none;
  }
`;

export { Logo, HeaderRight, Button, StyledButton };

export default HeaderWrapper;
