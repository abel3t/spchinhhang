import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  SalesWrapper,
  CarouselHeaderWrapper,
  CarouselButtonGroupWrapper,
  CarouselItemWrapper,
  HighlightItemWrapper
} from './Sales.style'
import MenuIcon from 'image/menu_icon.svg'
import { FormattedMessage } from 'react-intl'
import { MenuDown } from 'components/AllSvgIcon'
import Carousel from 'react-multi-carousel'
import Button from 'components/Button/Button'
import Image from 'components/Image/Image'
import { ArrowNext, ArrowPrev } from 'components/AllSvgIcon'
import SampleProduct from 'image/sample_product.png'
import ManFashion from 'image/man_fashion.png'
import WomanFashion from 'image/woman_fashion.png'
import FashionAds from 'image/fashion_ads.png'

type SalesProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const mockupDeals = new Array(10).fill({
  price: '1.700.000 đ - 2.100.000 đ',
  title: 'Kem Dưỡng Mắt Dr.Denis Gross Ferulic + Retinol and so on content',
  image: SampleProduct
})

const mockupManFashionData = new Array(6).fill({
  title: 'Summer Sales -50%',
  image: ManFashion
})

const mockupWomanFashionData = new Array(6).fill({
  title: 'Summer Sales -50%',
  image: WomanFashion
})

const CarouselHeader = ({
  title,
  titleIcon,
  titleStyle,
  titleClass,
  iconClass,
  iconStyle
}: any) => {
  return (
    <CarouselHeaderWrapper>
      <div>
        <span style={iconStyle} className={iconClass}>
          {titleIcon}
        </span>
        <span style={titleStyle} className={titleClass}>
          {title}
        </span>
      </div>
    </CarouselHeaderWrapper>
  )
}

const noneResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 991, min: 592 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 591, min: 0 },
    items: 1
  }
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 991, min: 592 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 591, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}

const CarouselButtonGroup = ({ previous, next }: any) => {
  return (
    <CarouselButtonGroupWrapper>
      <Button
        variant="textButton"
        onClick={previous}
        title=""
        icon={<ArrowPrev />}
      />
      <Button
        variant="textButton"
        onClick={next}
        title=""
        icon={<ArrowNext />}
      />
    </CarouselButtonGroupWrapper>
  )
}

const CarouselItem = ({ price, title, image, ...props }: any) => {
  const router = useRouter()
  return (
    <CarouselItemWrapper onClick={() => router.push('product/garlic')} {...props}>
      <Image className="product-img" url={image} alt="Hình ảnh sản phẩm" />
      <div className="product-title ellipsis-2">{title}</div>
      <strong className="product-price">{price}</strong>
    </CarouselItemWrapper>
  )
}

const HighlightItem = ({ title, image, type = 'man', ...props }: any) => {
  return (
    <HighlightItemWrapper {...props}>
      <Image className="product-img" url={image} alt="Hình ảnh sản phẩm" />
      <div className={`title-section ${type}`}>
        <strong className="title">{title}</strong>
        <br />
        <a className="view-more-button">Xem thêm chi tiết</a>
      </div>
    </HighlightItemWrapper>
  )
}

export const Sales: React.FC<SalesProps> = ({ deviceType }) => {
  return (
    <SalesWrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 highlight-left">
            <Carousel
              className="h-100"
              arrows={false}
              responsive={noneResponsive}
              ssr={true}
              showDots={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}>
              {mockupManFashionData.map((item, index) => (
                <HighlightItem key={`man-${index}`} {...item} />
              ))}
            </Carousel>
          </div>
          <div className="col-12 col-md-8 highlight-right">
            <CarouselHeader titleClass="bold" title="Thời gian nam" />
            <Carousel
              arrows={false}
              responsive={responsive}
              ssr={true}
              showDots={false}
              infinite={true}
              slidesToSlide={1}
              autoPlay={true}
              autoPlaySpeed={10000}
              renderButtonGroupOutside={true}
              additionalTransfrom={0}
              customButtonGroup={<CarouselButtonGroup />}
              // use dir ltr when rtl true
            >
              {mockupDeals.map(
                (data, index) =>
                  index % 2 === 0 && (
                    <div key={`man-item-${index}-${index + 1}`}>
                      <CarouselItem key={`man-item-${index}`} {...data} />
                      {mockupDeals[index + 1] && (
                        <CarouselItem
                          key={`man-item-${index + 1}`}
                          {...mockupDeals[index + 1]}
                        />
                      )}
                    </div>
                  )
              )}
              {/* {mockupDeals.map((item, index) => (
                <CarouselItem key={`man-product-${index}`} {...item} />
              ))} */}
            </Carousel>
          </div>
        </div>
        {/* <div className="w-100 my-3">
          <Image className="w-100 h-auto" url={FashionAds} alt="ads" />
        </div> */}
        <div className="row pt-3">
          <div className="col-12 col-md-4 highlight-left">
            <Carousel
              className="h-100"
              arrows={false}
              responsive={noneResponsive}
              ssr={true}
              showDots={true}
              infinite={true}
              slidesToSlide={1}
              autoPlay={true}
              autoPlaySpeed={3000}>
              {mockupWomanFashionData.map((item, index) => (
                <HighlightItem key={`woman-${index}`} {...item} type="woman" />
              ))}
            </Carousel>
          </div>
          <div className="col-12 col-md-8 highlight-right">
            <CarouselHeader titleClass="bold" title="Thời gian nữ" />
            <Carousel
              arrows={false}
              responsive={responsive}
              ssr={true}
              showDots={false}
              infinite={true}
              slidesToSlide={1}
              autoPlay={true}
              autoPlaySpeed={10000}
              renderButtonGroupOutside={true}
              additionalTransfrom={0}
              customButtonGroup={<CarouselButtonGroup />}
              // use dir ltr when rtl true
            >
              {mockupDeals.map(
                (data, index) =>
                  index % 2 === 0 && (
                    <div key={`woman-item-${index}-${index + 1}`}>
                      <CarouselItem key={`woman-item-${index}`} {...data} />
                      {mockupDeals[index + 1] && (
                        <CarouselItem
                          key={`woman-item-${index + 1}`}
                          {...mockupDeals[index + 1]}
                        />
                      )}
                    </div>
                  )
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </SalesWrapper>
  )
}
export default Sales
