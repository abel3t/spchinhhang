import React from 'react'
import {
  SubscribeButton,
  SearchBox,
  SearchInputWrapper
} from '../SearchBox/SearchBox.style'
import { FormattedMessage } from 'react-intl'

type InputProps = {
  type?: string
  value?: number | string
  // buttonText?: string;
  buttonIcon?: React.ReactNode
  placeholder?: React.ReactNode
  bordered?: boolean
  showSvg?: boolean
  style?: React.CSSProperties
  onChange?: (e: any) => void
  onKeyPress?: (e: any) => void
  onBlur?: (e: any) => void
  onClick?: (e: any) => void
}

const InputSearch: React.FC<InputProps & any> = ({
  type,
  value,
  buttonText,
  buttonIcon,
  placeholder,
  onChange,
  style,
  onKeyPress,
  onBlur,
  onClick,
  onFocus,
  bordered,
  inputClass
}) => {
  return (
    <>
      <SearchInputWrapper
        style={style}
        bordered={bordered}
        className={`${inputClass} ${bordered === true ? 'bordered' : ''}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onClick()
          }}>
          <FormattedMessage
            id="subscribePlaceholder"
            defaultMessage={placeholder}>
            {(placeholder) => (
              <SearchBox
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onKeyPress={onKeyPress}
                onBlur={onBlur}
              />
            )}
          </FormattedMessage>
          <SubscribeButton onClick={onClick}>
              {buttonIcon}
              {buttonText ? (
                <span className='buttonText'>
                  <FormattedMessage
                    id='subscribeButtonText'
                    defaultMessage={buttonText}
                  />
                </span>
              ) : (
                ''
              )}
            </SubscribeButton>
        </form>
      </SearchInputWrapper>
    </>
  )
}
export default InputSearch
