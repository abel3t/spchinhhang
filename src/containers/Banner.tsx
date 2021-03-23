import React from 'react';
import Carousel from 'react-multi-carousel';

const Banner = () => {
  return (
    <>
      <div className="w-full h-64 grid grid-cols-3 gap-2">
        <LeftBanner className="lg:col-span-2 sm:col-span-3 h-64 bg-white"/>
        <RightBanner className="lg:col-span-1 lg:block sm:hidden bg-white"/>
      </div>
    </>
  );
};

type LeftBannerProps = {
  className?: string
}

type RightBannerProps = {
  className?: string
}

const LeftBanner = ({ className = '' }: LeftBannerProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[ 'tablet', 'mobile' ]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px text-center"
        className={className}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </>
  );
};

const RightBanner = ({ className = '' }: RightBannerProps) => {
  return (
    <>
      <div className={className}>
        Hey
      </div>
    </>
  );
};

export default Banner;