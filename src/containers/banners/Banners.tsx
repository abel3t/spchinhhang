import React from 'react';
import { Carousel } from 'antd';
import { BannersWrapper } from './Banners.style';

const Banners = () => {
  const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    background: '#364d79'
  };
  return (
    <BannersWrapper>
      <Carousel autoplay>
        <div>
          <h3 style={{ height: '274px', width: '1270px', textAlign: 'center', backgroundColor: '#ccc' }}>1</h3>
        </div>
        <div>
          <h3 style={{ height: '274px', width: '1270px', textAlign: 'center', backgroundColor: '#ccc' }}>2</h3>
        </div>
        <div>
          <h3 style={{ height: '274px', width: '1270px', textAlign: 'center', backgroundColor: '#ccc' }}>3</h3>
        </div>
        <div>
          <h3 style={{ height: '274px', width: '1270px', textAlign: 'center', backgroundColor: '#ccc' }}>4</h3>
        </div>
      </Carousel>
    </BannersWrapper>
  );
};

export default Banners;