import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

export const BannersWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;

  .slick-slider {
    width: 100%;
    background: antiquewhite;;
  }
`;

export const StyledCarousel = styled(Carousel)`
  min-width: 100%;
  min-height: 100%;
  background: antiquewhite;
`;