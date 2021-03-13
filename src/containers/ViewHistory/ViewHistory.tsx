import React, { useState } from 'react'
import { ViewHistoryWrapper } from './\bViewHistory.style'
import MenuIcon from 'image/menu_icon.svg'
import { FormattedMessage } from 'react-intl'
import { MenuDown } from 'components/AllSvgIcon'

type ViewHistoryProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}
export const ViewHistory: React.FC<ViewHistoryProps> = ({
  deviceType
}) => {
  return (
    <ViewHistoryWrapper>
      <FormattedMessage defaultMessage="Sản phẩm đã xem" id="viewHistory" />
      <MenuDown />
    </ViewHistoryWrapper>
  )
}
export default ViewHistory
