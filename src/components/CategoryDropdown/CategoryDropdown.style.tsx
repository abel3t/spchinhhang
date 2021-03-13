import styled from 'styled-components';
import { animated } from 'react-spring';
import { themeGet } from '@styled-system/theme-get';

const CategoryDropdownWrapper = styled.div`
  .rc-collapse {
    border: 0;
    border-radius: 0;
    background-color: transparent;
    .rc-collapse-item {
      border: 0;
      margin-bottom: 21px;
      @media (max-width: 990px) {
        margin-bottom: 14px;
      }
      .rc-collapse-header {
        outline: 0;
        font-family: 'Lato', sans-serif;
        font-size: ${themeGet('fontSizes.2', '15')}px;
        font-weight: ${themeGet('fontWeights.6', '700')};
        color: ${themeGet('colors.darkBold', '#0D1136')};
        display: flex;
        align-items: center;
        padding: 0;
        padding: 3px 0;
        transition: 0.15s ease-in-out;
        &:hover {
          color: ${themeGet('colors.primary', '#009E7F')};
        }
        svg {
          margin-right: 15px;
          fill: currentColor;
          path {
            fill: currentColor;
          }
        }
        @media (max-width: 990px) {
          font-size: 14px;
        }
      }
      &.rc-collapse-item-active {
        .rc-collapse-header {
          color: ${themeGet('colors.primary', '#009E7F')};
        }
      }

      &.dropdown-active {
        .rc-collapse-header {
          color: ${themeGet('colors.primary', '#009E7F')};
        }
      }
      .rc-collapse-content {
        padding-left: 10px;
        padding-right: 0;
        background-color: transparent;
        .rc-collapse-content-box {
          margin: 0;
          .dropdown-link {
            display: block;
            font-family: 'Lato', sans-serif;
            font-size: ${themeGet('fontSizes.1', '13')}px;
            font-weight: ${themeGet('fontWeights.3', '400')};
            color: ${themeGet('colors.darkRegular', '#77798c')};
            margin-top: 19px;
            padding: 5px 0;
            transition: 0.15s ease-in-out;
            cursor: pointer;

            &:hover,
            &.current-page {
              color: ${themeGet('colors.primary', '#009E7F')};
            }
            @media (max-width: 990px) {
              margin-top: 13px;
            }

            &:before {
              content: '- ';
            }
          }
        }
      }
    }
  }
`;

export const DropdownWrapper = styled.div``;

export const IconWrapper = styled.div`
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 15px;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.div`
  outline: 0;
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.2', '15')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.darkBold', '#0D1136')};
  display: flex;
  align-items: center;
  padding: 0;
  padding: 3px 0;
  margin-bottom: 10px;
  transition: 0.15s ease-in-out;
  vertical-align: middle;
  cursor: pointer;
  &:hover,
  &.active {
    color: ${themeGet('colors.primary', '#009E7F')};
  }

  @media (max-width: 990px) {
    font-size: 14px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  padding: 13px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  margin-bottom: 13px;

  &.open {
    > ${Title} {
      color: ${themeGet('colors.primary', '#009E7F')};
    }
  }
`;

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  padding: 0px 0px 0px 33px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;

  ${Title} {
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.1', '13')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    color: ${themeGet('colors.darkRegular', '#77798c')};
    margin-bottom: 10px;
    padding: 5px 0;
    transition: 0.15s ease-in-out;
    cursor: pointer;

    &:hover,
    &.active {
      color: ${themeGet('colors.primary', '#009E7F')};
    }
    @media (max-width: 990px) {
      margin-top: 13px;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:before {
      content: '- ';
    }
  }
`;

export const DropdownIcon = styled.div``;

export default CategoryDropdownWrapper;
