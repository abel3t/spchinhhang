import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PopoverWrapper = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;

export const SidebarWrapper = styled.div`
  padding: 45px 50px;
  padding-top: 35px;
  padding-right: 35px;

  @media (max-width: 1199px) {
    padding: 40px 35px;
  }

  @media (max-width: 990px) {
    display: none;
    padding: 0;
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
  width: 100%;

  .category-popover {
    .popover-handler {
      display: block;
      padding: 15px;
      cursor: pointer;
    }
    .popover-content {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      border-radius: 0;
      box-shadow: none;
      padding: 25px 35px;
      border-top: 1px solid ${themeGet('colors.borderColor', '#f1f1f1')};

      &::before {
        display: none;
      }
      .category-dropdown {
        animation: ${Fade} 0.6s;
      }
      @media (max-width: 990px) {
        padding: 25px;
      }
    }
  }
`;

export const PopoverHandler = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #0d1136;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    &:first-child {
      flex-grow: 1;
      svg {
        margin-right: 10px;
      }
    }
    &:last-child {
      color: ${themeGet('colors.darkRegular', '#77798C')};
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${themeGet('colors.darkBold', '#0D1136')};
`;
