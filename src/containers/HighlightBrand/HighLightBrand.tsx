import React, { useState } from 'react'
import {
  HighLightItemWrapper,
  HighLightItemsWrapper,
  HighLightTitleWrapper
} from './HighLightBrand.style'
import MenuIcon from 'image/menu_icon.svg'
import { FormattedMessage } from 'react-intl'
import { MenuDown } from 'components/AllSvgIcon'
import Carousel from 'react-multi-carousel'
import Button from 'components/Button/Button'
import Image from 'components/Image/Image'
import { ArrowNext, ArrowPrev } from 'components/AllSvgIcon'
import MascaraImage from 'image/mascara.png'
import DiptyLogo from 'image/dipty_logo.png'
import { useRouter } from 'next/router'

type HighLightProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const mockupData = new Array(5).fill({
  title: 'Benefit San Francisc',
  sold_out: 691,
  image: MascaraImage,
  price: '100.000 ~ 100.000.00',
  searched: 19.0,
  logo: DiptyLogo
})

const Divider = ({ width, height, color }) => {
  return <div style={{ height, width, backgroundColor: color }} />
}

export const HighLight: React.FC<HighLightProps> = ({ deviceType }) => {
  const router = useRouter()
  return (
    <div>
      <Divider width={36} height={1} color="#ffffff" />
      <HighLightTitleWrapper className="bold mt-2">
        Highlighted Brands
      </HighLightTitleWrapper>
      <HighLightItemsWrapper className="flex-wrap justify-content-md-center d-flex">
        {mockupData.map((item, index) => (
          <HighLightItemWrapper
            onClick={() => router.push('product/onions')}
            key={`highLight-brand-${index}`}
            className="col-12 col-md-4 px-2">
            <div>
              <div className="item-header">
                <Image className="cover" url={item.image} alt="sản phẩm" />
                <div className="logo">
                  <Image url={item.logo} alt="Thương hiệu" />
                </div>
              </div>
              <h4 className="secondary-text">{item.title}</h4>
              <strong>{item.price}</strong> <br />
              <span className="secondary-text">
                Đã bán ~{item.sold_out} sản phẩm
              </span>
              <br />
              <span className="secondary-text">
                {item.searched} lượt tìm kiếm
              </span>
            </div>
          </HighLightItemWrapper>
        ))}
      </HighLightItemsWrapper>
    </div>
  )
}
export default HighLight
