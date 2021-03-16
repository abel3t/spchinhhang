import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Trending from 'containers/trending/Trending';
import Banners from '../containers/banners/Banners';
import HotToday from '../containers/hot-today/HotToday';

function HomePage({ deviceType }) {
  const targetRef = React.useRef(null);
  const { query } = useRouter();

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

      <Banners/>

      <HotToday/>

      <Trending/>

    </>
  );
}

export default HomePage;

// <Modal>
//   <DailyDealWrapper className="wrapper">
//     <DealCarousel deviceType={deviceType}/>
//   </DailyDealWrapper>
//   <div className='pb-3'>
//     <DealImage/>
//   </div>
//   <IndustryWrapper className="wrapper">
//     <IndustryCarousel deviceType={deviceType}/>
//   </IndustryWrapper>
//   <SuggestSectionWrapper className="wrapper">
//     <SuggestSection/>
//   </SuggestSectionWrapper>
//   <SaleSectionWrapper>
//     <Sales deviceType={deviceType}/>
//   </SaleSectionWrapper>
//   <TrendingWrapper className="wrapper">
//     <trending deviceType={deviceType}/>
//   </TrendingWrapper>
//   <HighlightedBrandWrapper
//     className="wrapper"
//     style={{
//       backgroundImage: `url(${HighlightBrandBg})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat'
//     }}>
//     <HighLightBrand deviceType={deviceType}/>
//   </HighlightedBrandWrapper>
// </Modal>