import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const InputIncDecWrapper = styled.div`
  width: 180px;
  height: 44px;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid ${themeGet('colors.lightDarkColor')};
  input[type='number'] {
    width: calc(100% - 54px);
    position: absolute;
    left: 27px;
    top: 0;
    height: 100%;
    padding: 0;
    border: 0;
    color: ${themeGet('colors.darkBold')};
    font-family: 'Lato', sans-serif;
    font-size: ${themeGet('fontSizes.2', '15')}px;
    font-weight: ${themeGet('fontWeights.6', '700')};
    text-align: center;
    background-color: transparent;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    border: 0;
    width: 28px;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    left: auto;
    justify-content: center;
    color: ${themeGet('colors.darkBold')};
    &:hover,
    &:focus {
      outline: none;
    }

    &.decBtn {
      left: 0;
    }

    &.incBtn {
      right: 0;
    }
  }

  /* For vertical style */
  &.vertical {
    width: 30px;
    height: 90px;
    display: block;
    color: ${themeGet('colors.darkBold')};
    flex-shrink: 0;

    input[type='number'] {
      left: 0;
      font-family: 'Lato', sans-serif;
      font-size: ${themeGet('fontSizes.2', '15')}px;
      font-weight: ${themeGet('fontWeights.6', '700')};
      color: ${themeGet('colors.darkBold', '#0D1136')};
      height: calc(100% - 54px);
      position: absolute;
      top: 27px;
      width: 100%;
    }

    button {
      width: 100%;
      height: 27px;
      top: auto;
      color: ${themeGet('colors.darkRegular', '#77798c')};

      &.decBtn {
        bottom: 0;
        justify-content: center;
      }

      &.incBtn {
        top: 0;
        justify-content: center;
      }
    }
  }
`;

InputIncDecWrapper.displayName = 'InputIncDecWrapper';

export default InputIncDecWrapper;
