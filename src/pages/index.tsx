import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { openModal, Modal } from '@redq/reuse-modal';
import LocationModal from 'containers/LocationModal/LocationModal';
import { getCookie } from 'components/helpers/session';
import IndustryCarousel from 'containers/IndustryCarousel/IndustryCarousel';
import SuggestSection from 'containers/SuggestSection/SuggestSection';
import DealCarousel from 'containers/DealCarousel/DealCarousel';
import Sales from 'containers/Sales/Sales';
import Trending from 'containers/Trending/Trending';
import HighLightBrand from 'containers/HighlightBrand/HighLightBrand';
import HighlightBrandBg from 'image/highlight_brand_bg.png';
import {
  MainContentArea,
  ContentSection,
  DailyDealWrapper,
  FeaturePage,
  IndustryWrapper,
  SuggestSectionWrapper,
  SaleSectionWrapper,
  TrendingWrapper,
  HighlightedBrandWrapper
} from 'styled/pages.style';
import DealImage from 'containers/Dealimage/DealImage';
// Static Data Import Here

const PAGE_TYPE = 'grocery';

function HomePage({ deviceType }) {
  const targetRef = React.useRef(null);
  const { query } = useRouter();

  React.useEffect(() => {
    const modalTimer = setTimeout(() => {
      if (!getCookie('zip_code') && !getCookie('first_visit')) {
        openModal({
          show: true,
          overlayClassName: 'quick-view-overlay',
          closeOnClickOutside: true,
          component: LocationModal,
          // closeComponent: "div",
          config: {
            enableResizing: false,
            disableDragging: true,
            className: 'quick-view-modal',
            width: 458,
            height: 'auto'
          }
        });
      }
    }, 1800);
    return () => {
      clearTimeout(modalTimer);
    };
  }, []);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth'
      });
    }
  }, [ query ]);

  return (
    <>
      <Head>
        <title>spchinhhang</title>
      </Head>
      <Modal>
        <DailyDealWrapper className="wrapper">
          <DealCarousel deviceType={deviceType}/>
        </DailyDealWrapper>
        <div className='pb-3'>
          <DealImage/>
        </div>
        <IndustryWrapper className="wrapper">
          <IndustryCarousel deviceType={deviceType}/>
        </IndustryWrapper>
        <SuggestSectionWrapper className="wrapper">
          <SuggestSection/>
        </SuggestSectionWrapper>
        <SaleSectionWrapper>
          <Sales deviceType={deviceType}/>
        </SaleSectionWrapper>
        <TrendingWrapper className="wrapper">
          <Trending deviceType={deviceType}/>
        </TrendingWrapper>
        <HighlightedBrandWrapper
          className="wrapper"
          style={{
            backgroundImage: `url(${HighlightBrandBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <HighLightBrand deviceType={deviceType}/>
        </HighlightedBrandWrapper>
      </Modal>
    </>
  );
}

export default HomePage;
