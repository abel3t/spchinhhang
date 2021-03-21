import React from 'react';
import { BannersWrapper, StyledCarousel } from './Banners.style';
import { Button, Paper } from '@material-ui/core';
import Slider from 'react-slick';

const Banners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <BannersWrapper>
      <Slider {...settings}>
        <div style={{ backgroundColor: 'green' }}>
          <h3>1</h3>
        </div>
        <div style={{ backgroundColor: 'green' }}>
          <h3>2</h3>
        </div>
        <div style={{ backgroundColor: 'green' }}>
          <h3>3</h3>
        </div>
        <div style={{ backgroundColor: 'green' }}>
          <h3>4</h3>
        </div>
        <div style={{ backgroundColor: 'green' }}>
          <h3>5</h3>
        </div>
        <div style={{ backgroundColor: 'green' }}>
          <h3>6</h3>
        </div>
      </Slider>
    </BannersWrapper>
  );
};

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  );
}

const PrevArrow: React.FC = () => {
  return <Button>Prev</Button>;
};

const NextArrow: React.FC = () => {
  return <Button>Next</Button>;
};

export default Banners;