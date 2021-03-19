import React, { useState } from 'react';
import {
  TrendingItemWrapper,
  TrendingItemsWrapper,
  TrendingTitleWrapper
} from './Trending.style';
import { Image } from 'antd';

type TrendingProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const mockupData = [];

export const Trending: React.FC<TrendingProps> = ({ deviceType }) => {
  return (
    <div>
      <TrendingTitleWrapper className="bold">
        Xu hướng tìm kiếm trong 24h qua
      </TrendingTitleWrapper>
      <TrendingItemsWrapper className="d-flex flex-wrap">

      </TrendingItemsWrapper>
    </div>
  );
};
export default Trending;
