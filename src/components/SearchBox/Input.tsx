import React from 'react';
import { SearchBox, SearchButton, SearchInputWrapper } from './SearchBox.style';

type InputProps = {
  type?: string;
  value?: number | string;
  // buttonText?: string;
  buttonIcon?: React.ReactNode;
  placeholder?: React.ReactNode;
  bordered?: boolean;
  showSvg?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: any) => void;
  onKeyPress?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
};

const InputSearch: React.FC<InputProps & any> = ({
  type,
  value,
  // buttonText,
  buttonIcon,
  placeholder,
  onChange,
  style,
  onKeyPress,
  onBlur,
  onClick,
  onFocus,
  bordered,
  showSvg,
  inputClass
}) => {
  return (
    <>
      <SearchInputWrapper
        style={style}
        bordered={bordered}
        showSvg={showSvg}
        className={`${inputClass} ${bordered === true ? 'bordered' : ''}`}
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            onClick();
          }}
        >
          {showSvg && (
            <span className='searchIcon' onClick={onClick}>
              {buttonIcon}
            </span>
          )}

          <SearchBox
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
          />
          {showSvg !== true ? (
            <SearchButton onClick={onClick}>
              {buttonIcon}
            </SearchButton>
          ) : (
            ''
          )}
        </form>
      </SearchInputWrapper>
    </>
  );
};
export default InputSearch;
