import React from 'react';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import Banner from '../containers/Banner';
import Category from '../containers/Category';

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="viewport" content="viewport-fit=cover"/>
      </Head>

      <main>
        <Banner/>

        <Category/>

        <div className="flex flex-wrap -mx-4">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </main>
    </>
  );
};

export default IndexPage;