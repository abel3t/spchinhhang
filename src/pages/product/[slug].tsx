import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import ProductDetails from 'containers/ProductDetails/ProductDetails';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer
} from 'styled/product-single.style';
import { withApollo } from 'helper/apollo';
import { GET_PRODUCT_DETAILS } from 'graphql/query/product.query';

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

  const { data, error, loading } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { slug }
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  // let content;
  // switch (data.product.type) {
  //   case 'books': {
  //     content = (
  //       <ProductDetailsBook product={data.product} deviceType={deviceType} />
  //     );
  //     break;
  //   }
  //   default: {
  //     content = (
  //       <ProductDetails product={data.product} deviceType={deviceType} />
  //     );
  //   }
  // }

  return (
    <>
      <Head>
        <title>{data.product.title} - spchinhhang</title>
      </Head>
      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            <ProductDetails product={data.product} deviceType={deviceType}/>
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export default withApollo(ProductPage);
