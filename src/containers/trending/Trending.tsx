import React from 'react';
import {
  TrendingItemsWrapper,
  TrendingTitleWrapper
} from './Trending.style';

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
