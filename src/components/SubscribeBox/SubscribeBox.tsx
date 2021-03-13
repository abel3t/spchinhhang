import InputSearch from './Input'
import React, { useRef, useState } from 'react'
import SearchWrapper, {
  SubscribeBoxWrapper
} from '../SearchBox/SearchBox.style'
import { SendIcon } from '../AllSvgIcon'

type SubscribeBoxProps = {
  buttonText?: string
  buttonIcon?: React.ReactNode
  inputStyle?: React.CSSProperties
  style?: React.CSSProperties
  bordered?: boolean
  hideType?: boolean
  showSvg?: boolean
  expand?: boolean
  minimal?: boolean
  autoSuggestion?: boolean
  placeholder?: string
  className?: string
  handleSubscribe?: Function
  onClick?: Function
  value?: any
  pathname?: string
  deviceType: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const Subscribe: React.FC<SubscribeBoxProps> = ({
  buttonText,
  buttonIcon,
  inputStyle,
  style,
  bordered,
  hideType,
  showSvg,
  placeholder,
  className,
  handleSubscribe,
  onClick,
  value,
  deviceType
}) => {
  const [searchValue, setSearchValue] = useState()
  let searchRef = useRef<HTMLInputElement>(null)

  const handleSearchInput = (event: any) => {
    setSearchValue(event.target.value)
    handleSubscribe(event.target.value)
  }

  return (
    <SearchWrapper
      className={className}
      ref={searchRef}
      style={style}
      hideType={hideType}>
      <SubscribeBoxWrapper>
        <InputSearch
          type="text"
          value={value}
          onChange={handleSearchInput}
          buttonIcon={buttonIcon}
          buttonText={deviceType.mobile ? null : buttonText}
          placeholder={placeholder}
          style={inputStyle}
          bordered={bordered}
          showSvg={showSvg}
          onClick={() => onClick(searchValue)}
        />
      </SubscribeBoxWrapper>
    </SearchWrapper>
  )
}

Subscribe.defaultProps = {
  bordered: false,
  buttonText: 'Subscribe',
  buttonIcon: <SendIcon />,
  placeholder: 'Enter your E-mail',
  inputStyle: {
    width: '100%'
  }
}

export default Subscribe
