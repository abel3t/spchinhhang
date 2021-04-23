import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const BannerWrapper = styled.div`
  flex-grow: 1;
`;

const StyledCarousel = styled(Carousel)`
  min-height: 230px;
  text-align: center;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <StyleLeftBanner/>
        </Grid>
        <Grid item xs={4}>
          <StyleRightBanner/>
        </Grid>
      </Grid>
    </BannerWrapper>
  );
};

type LeftBannerProps =
  {
    className?: string;
  }

type RightBannerProps =
  {
    className?: string;
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
        <StyledCarousel
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
        >
          <div>ne 1</div>
          <div>Itesadfm 2</div>
          <div>Isdfem 3</div>
          <div>Itdem 4</div>
        </StyledCarousel>
      </>
    );
  }
;

const RightBanner = ({ className = '' }: RightBannerProps) => {
    return (<img src="https://salt.tikicdn.com/cache/w408/ts/banner/d9/3f/9d/4db614a0cf8e973b2c30181ab57838d2.jpg"/>);
  }
;

const StyleLeftBanner = styled(LeftBanner)`
  width: 30%;
`;

const StyleRightBanner = styled(RightBanner)`
  width: 20%;
`;

export default Banner;