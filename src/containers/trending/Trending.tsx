import React, { useState } from 'react';
import {
  TrendingItemWrapper,
  TrendingItemsWrapper,
  TrendingTitleWrapper
} from './Trending.style';
import { Image } from 'antd';
import MascaraImage from 'image/mascara.png';

type TrendingProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const mockupData = new Array(6).fill({
  title: 'Mascara',
  number: 691,
  image: MascaraImage
});

export const Trending: React.FC<TrendingProps> = ({ deviceType }) => {
  return (
    <div>
      <TrendingTitleWrapper className="bold">
        Xu hướng tìm kiếm trong 24h qua
      </TrendingTitleWrapper>
      <TrendingItemsWrapper className="d-flex flex-wrap">
        {mockupData.map((item, index) => (
          <TrendingItemWrapper key={`trending-${index}`} className="col-6 col-md-4 col-lg-2 p-4">
            <Image url={item.image} alt="sản phẩm"/>
            <h4 className="bold">{item.title}</h4>
            <span className="secondary-text">{item.number} Sản phẩm</span>
          </TrendingItemWrapper>
        ))}
      </TrendingItemsWrapper>
    </div>
  );
};
export default Trending;
