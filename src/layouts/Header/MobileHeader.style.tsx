import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const SearchWrapper = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  color: ${themeGet('colors.darkBold', '#0D1136')};

  svg {
    display: block;
    width: 17px;
    height: auto;
  }
`;

export const Logo = styled.span`
  color: ${themeGet('colors.darkBold', '#0D1136')};
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 40px;

  a {
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
    max-width: 120px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    margin-right: 20px;
  }

  @media (max-width: 990px) {
    margin-right: 0;
  }
`;

export const MobileHeaderWrapper = styled.div`
  @media (min-width: 991px) {
    .desktop {
      display: none;
    }
  }
`;

export const SelectedType = styled.button`
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};
  padding-top: 0 15px;
  border-radius: ${themeGet('radius.3', '6')}px;
  outline: 0;
  min-width: 150px;

  span {
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.primary', '#009E7F')};
    text-decoration: none;

    &:first-child {
      margin-right: auto;
    }
  }
`;

export const DropDownArrow = styled.span`
  width: 12px;
  margin-left: 16px;
`;

export const SelectedLang = styled.button`
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 0;
  padding: 0 10px;
  border-radius: ${themeGet('radius.3', '6')}px;
  outline: 0;

  span {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: ${themeGet('colors.darkPrimary', '#009E7F')};
    text-decoration: none;

    &:first-child {
      margin-right: auto;
    }
  }
`;

export const MobileHeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.25s ease-in-out;

  &.unSticky:not(.home) {
    background-color: red;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  }

  &.sticky {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);

    @media only screen and (min-width: 991px) and (max-width: 1366px) {
      .searchIconWrapper {
        opacity: 1;
      }
    }
  }
`;

export const DrawerWrapper = styled.div``;

export const LogoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  img {
    display: block;
  }
`;

export const HamburgerIcon = styled.div`
  width: 26px;
  cursor: pointer;
  display: block;
  position: relative;

  > span {
    display: block;
    background-color: ${themeGet('colors.darkBold', '#0D1136')};
    border-radius: 6px;
    height: 2px;
    margin-bottom: 6px;

    transition: 0.2s ease-in-out;

    &:nth-child(1) {
      width: 26px;
    }

    &:nth-child(2) {
      width: 12px;
    }

    &:nth-child(3) {
      width: 22px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    > span {
      &:nth-child(1) {
        width: 12px;
      }

      &:nth-child(2) {
        width: 22px;
      }

      &:nth-child(3) {
        width: 26px;
      }
    }
  }
`;

export const DrawerContentWrapper = styled.div`
  padding-top: 60px;
`;

export const DrawerClose = styled.div`
  display: block;
  position: absolute;
  left: 35px;
  top: 14px;
  color: ${themeGet('colors.darkRegular', '#77798C')};
  cursor: pointer;
  padding: 10px;
  z-index: 1;

  svg {
    display: block;
    width: 12px;
    height: auto;
  }
`;

export const DrawerProfile = styled.div`
  background-color: ${themeGet('colors.lightColor', '#F7F7F7')};
  padding: 45px;
`;

export const LogoutView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .sign_in {
    /* background: transparent; */
    border: 0;
    padding-left: 0;
    padding-right: 25px;
  }

  .sign_in,
  .sign_up {
    height: 36px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const LoginView = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const UserDetails = styled.div`
  h3 {
    font-size: 14px;
    font-weight: 700;
    color: ${themeGet('colors.darkBold', '#0D1136')};
    margin-bottom: 10px;
    line-height: 1.2;
  }

  span {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: ${themeGet('colors.darkBold', '#0D1136')};
  }
`;

export const DrawerMenu = styled.div`
  padding: 40px 0;
`;

export const DrawerMenuItem = styled.div`
  &:last-child {
    .drawer_menu_item {
      margin-bottom: 0;
    }
  }

  .drawer_menu_item {
    a,
    .logoutBtn {
      display: block;
      padding: 5px 45px;
      font-size: 14px;
      font-weight: 400;
      color: ${themeGet('colors.darkBold', '#0D1136')};
      margin-bottom: 19px;
      position: relative;
      transition: 0.15s ease-in-out;

      &:hover {
        color: ${themeGet('colors.primary', '#009E7F')};
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: transparent;
      }

      &.current-page {
        color: ${themeGet('colors.primary', '#009E7F')};
        font-weight: 700;

        &:before {
          background-color: ${themeGet('colors.primary', '#009E7F')};
        }
      }
    }
  }
`;

export const UserOptionMenu = styled.div`
  padding: 45px 0;
  border-top: 1px solid ${themeGet('colors.lightDarkColor', '#E6E6E6')};
`;

export const SearchModalWrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #ffffff;
  display: flex;
  width: 100%;

  .header-modal-search {
    width: calc(100% - 60px);

    @media (max-width: 420px) {
      input {
        width: 150px;
      }
    }

    button {
      background: transparent;
      color: ${themeGet('colors.darkBold', '#0D1136')};
      padding-left: 15px;
      padding-right: 15px;
    }

    input {
      color: ${themeGet('colors.darkBold', '#0D1136')};
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export const SearchModalClose = styled.button`
  border: 0;
  background: transparent;
  padding: 0 15px;
  color: ${themeGet('colors.darkBold', '#0D1136')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: block;
    width: 20px;
    height: auto;
  }
`;

export const LanguageItem = styled.button`
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  color: ${themeGet('colors.darkBold', '#0D1136')};
  line-height: 1.2em;
  padding: 15px 30px;
  transition: 0.15s ease-in-out;
  display: flex;
  align-items: center;
  border: 0;
  border-bottom: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};
  border-radius: 0;
  background-color: transparent;
  outline: 0;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 1400px) {
    margin-right: 10px;
    font-size: 15px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    padding: 15px 30px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 15px;

    svg {
      display: block;
      width: 20px;
      height: auto;
    }
  }
`;

export const LangSwitcher = styled.div`
  .popover-wrapper.right {
    .popover-content {
      padding: 15px 0;
    }
  }
`;

export const Flag = styled.div`
  margin-right: 7px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  overflow: hidden;

  svg {
    width: 20px;
    height: auto;
  }
`;