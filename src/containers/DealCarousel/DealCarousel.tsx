import React, { useState } from 'react';
import {
  DealCarouselWrapper,
  CarouselHeaderWrapper,
  CarouselButtonGroupWrapper,
  CarouselItemWrapper
} from './DealCarousel.style';
import MenuIcon from 'image/menu_icon.svg';
import { FormattedMessage } from 'react-intl';
import { MenuDown } from 'components/AllSvgIcon';
import Carousel from 'react-multi-carousel';
import Button from 'components/Button/Button';
import { ArrowNext, ArrowPrev, SunIcon } from 'components/AllSvgIcon';
import SampleProduct from 'image/sample_product.png';
import Image from 'components/Image/Image';
import DisCountPercent from '../../components/Discount/Discount';
import { useRouter } from 'next/router';

type DealCarouselProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const mockupDeals = new Array(10).fill({
  price: '1.700.000 đ - 2.100.000 đ',
  title: 'Kem Dưỡng Mắt Dr.Denis Gross Ferulic + Retinol and so on content',
  image: SampleProduct,
  discountInPercent: -20
});

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
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 991, min: 592 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 591, min: 0 },
    items: 1
  }
};

const CarouselButtonGroup = ({ previous, next }: any) => {
  return (
    <CarouselButtonGroupWrapper>
      <Button
        variant="textButton"
        onClick={previous}
        title=""
        icon={<ArrowPrev/>}
      />
      <Button
        variant="textButton"
        onClick={next}
        title=""
        icon={<ArrowNext/>}
      />
    </CarouselButtonGroupWrapper>
  );
};

const CarouselItem = ({
  price,
  title,
  image,
  discountInPercent,
  ...props
}: any) => {
  const router = useRouter();
  return (
    <CarouselItemWrapper onClick={() => router.push(`/product/pineapple`)} {...props}>
      <Image className="product-img" url={image} alt="Hình ảnh sản phẩm"/>
      <DisCountPercent
        className="top-right-carousel"
        color="danger"
        discountInPercent={discountInPercent}
      />
      <div className="product-title ellipsis-2">{title}</div>
      <strong className="product-price">{price}</strong>
    </CarouselItemWrapper>
  );
};

export const DealCarousel: React.FC<DealCarouselProps> = ({ deviceType }) => {
  return (
    <DealCarouselWrapper>
      <CarouselHeader
        titleClass="bold ml-1"
        title="Deal Hot hôm nay"
        titleIcon={<SunIcon/>}
      />
      <Carousel
        className="py-3"
        arrows={false}
        responsive={responsive}
        ssr={true}
        showDots={false}
        infinite={true}
        slidesToSlide={1}
        autoPlay={true}
        autoPlaySpeed={3000}
        renderButtonGroupOutside={true}
        additionalTransfrom={0}
        customButtonGroup={<CarouselButtonGroup/>}
        // use dir ltr when rtl true
      >
        {mockupDeals.map((item, index) => (
          <CarouselItem key={`deal-${index}`} {...item} />
        ))}
      </Carousel>
    </DealCarouselWrapper>
  );
};
export default DealCarousel;
