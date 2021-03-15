import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductDetails from 'containers/ProductDetails/ProductDetails';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer
} from 'styled/product-single.style';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductPage: NextPage<Props> = ({ deviceType }) => {
  const {
    query: { slug }
  } = useRouter();

  return (
    <>
      <Head>
        <title>spchinhhang</title>
      </Head>
      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            <ProductDetails product={{}} deviceType={deviceType}/>
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export default ProductPage;
