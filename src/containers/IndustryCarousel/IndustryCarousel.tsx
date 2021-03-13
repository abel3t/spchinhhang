import React, { useState } from 'react'
import {
  IndustryCarouselTitle,
  IndustryCarouselWrapper,
  CarouselButtonGroupWrapper,
  CarouselItemWrapper,
  CarouselItemsWrapper,
  PrevButtonWrapper,
  NextButtonWrapper
} from './IndustryCarousel.style'
import MenuIcon from 'image/menu_icon.svg'
import { FormattedMessage } from 'react-intl'
import { MenuDown } from 'components/AllSvgIcon'
import Carousel from 'react-multi-carousel'
import Button from 'components/Button/Button'
import { LongArrowLeft, LongArrowRight } from 'components/AllSvgIcon'
import SampleProduct from 'image/sample_product.png'
import Image from 'components/Image/Image'

type IndustryCarouselProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const mockupIndustries = new Array(50).fill({
  image: SampleProduct,
  title: 'Chăm sóc Da mặt'
})

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 8,
    slidesToSlide: 8
  },
  tablet: {
    breakpoint: { max: 991, min: 592 },
    items: 6,
    slidesToSlide: 6
  },
  mobile: {
    breakpoint: { max: 591, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
}

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <PrevButtonWrapper
      variant="textButton"
      onClick={onClick}
      title=""
      icon={<LongArrowLeft />}
    />
  )
}

const CustomRightArrow = ({ onClick }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <NextButtonWrapper
      variant="textButton"
      onClick={onClick}
      title=""
      icon={<LongArrowRight />}
    />
  )
}

const CarouselButtonGroup = ({ previous, next, ...rest }: any) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow }
  } = rest
  return (
    <CarouselButtonGroupWrapper>
      {currentSlide !== 0 && <CustomLeftArrow onClick={previous} />}
      {currentSlide + slidesToShow < totalItems / 2 && (
        <CustomRightArrow onClick={next} />
      )}
    </CarouselButtonGroupWrapper>
  )
}

const CarouselItem = ({ data }: any) => {
  return (
    <CarouselItemWrapper>
      <Image className="product-img" url={data.image} alt="Hình ảnh sản phẩm" />
      <div className="product-title ellipsis">{data.title}</div>
    </CarouselItemWrapper>
  )
}

export const IndustryCarousel: React.FC<IndustryCarouselProps> = ({
  deviceType
}) => {
  return (
    <IndustryCarouselWrapper>
      <IndustryCarouselTitle className="bold">
        Ngành hàng nổi bật
      </IndustryCarouselTitle>
      <Carousel
        className="industry-carousel"
        arrows={false}
        responsive={responsive}
        ssr={true}
        showDots={false}
        infinite={false}
        autoPlay={false}
        customTransition="all 1.5s"
        renderButtonGroupOutside={true}
        additionalTransfrom={0}
        customButtonGroup={<CarouselButtonGroup />}
        // use dir ltr when rtl true
      >
        {mockupIndustries.map(
          (data, index) =>
            index % 2 === 0 && (
              <CarouselItemsWrapper key={`industry-${index}-${index+1}`}>
                <CarouselItem key={`industry-${index}`} data={data} />
                {mockupIndustries[index + 1] && (
                  <CarouselItem
                    key={`industry-${index + 1}`}
                    data={mockupIndustries[index + 1]}
                  />
                )}
              </CarouselItemsWrapper>
            )
        )}
      </Carousel>
    </IndustryCarouselWrapper>
  )
}
export default IndustryCarousel
