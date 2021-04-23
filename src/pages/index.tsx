import React from 'react';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import Banner from '../containers/Banner';
import Category from '../containers/Category';
import { Grid } from '@material-ui/core';

import styled from 'styled-components';

const ProductWrapper = styled(Grid)`
  background-color: #fff;
  padding: 0;
`;

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="viewport" content="viewport-fit=cover"/>
      </Head>

      <main>
        <Banner/>

        <ProductWrapper container spacing={1}>
          {
            [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((_, index) => {
              return (
                <Grid item key={index} xs={3} md={2}>
                  <ProductCard/>
                </Grid>
              );
            })
          }
        </ProductWrapper>

      </main>
    </>
  );
};

export default IndexPage;