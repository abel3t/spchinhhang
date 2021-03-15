import React from 'react';
import Router from 'next/router';
import { closeModal } from '@redq/reuse-modal';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from 'components/Button/Button';
import {
  QuickViewWrapper,
  ProductDetailsWrapper,
  ProductPreview,
  DiscountPercent,
  ProductInfoWrapper,
  ProductInfo,
  ProductTitle,
  ProductWeight,
  ProductDescription,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  ModalClose
} from './QuickView.style';
import { CloseIcon, CartIcon } from 'components/AllSvgIcon';
import { findProductIndex, getProductQuantity } from 'helper/utility';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';

type QuickViewProps = {
  modalProps: any;
  deviceType: any;
  onModalClose: any;
};

const QuickView: React.FunctionComponent<QuickViewProps> = ({
  modalProps,
  deviceType,
  onModalClose
}) => {
  const {
    id,
    type,
    title,
    unit,
    price,
    discountInPercent,
    salePrice,
    description,
    gallery,
    categories
  } = modalProps;

  function onCategoryClick(slug) {
    Router.push({
      pathname: `/${type.toLowerCase()}`,
      query: { category: slug }
    }).then(() => window.scrollTo(0, 0));
    closeModal();
  }

  return (
    <>
      <ModalClose onClick={onModalClose}>
        <CloseIcon/>
      </ModalClose>
      <QuickViewWrapper>
        <ProductDetailsWrapper className='product-card' dir='ltr'>
          <ProductPreview>
            <CarouselWithCustomDots items={gallery} deviceType={deviceType}/>
            {!!discountInPercent && (
              <>
                <DiscountPercent>{discountInPercent}%</DiscountPercent>
              </>
            )}
          </ProductPreview>
          <ProductInfoWrapper>
            <Scrollbars universal autoHide autoHeight autoHeightMax='90vh'>
              <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <ProductWeight>{unit}</ProductWeight>
                <ProductDescription>
                  <ReadMore character={600}>{description}</ReadMore>
                </ProductDescription>

                <ProductCartWrapper>
                  <ProductPriceWrapper>
                    {discountInPercent ? (
                      <SalePrice>
                        {price}
                      </SalePrice>
                    ) : (
                      ''
                    )}

                    <ProductPrice>
                      VND
                      {salePrice ? salePrice : price}
                    </ProductPrice>
                  </ProductPriceWrapper>
                  <ProductCartBtn>
                    <Button
                      title='Cart'
                      intlButtonId='addCartButton'
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      className='cart-button'
                      icon={<CartIcon/>}
                      onClick={e => console.log('click')}
                    />
                  </ProductCartBtn>
                </ProductCartWrapper>

                <ProductMeta>
                  <MetaSingle>
                    {categories
                      ? categories.map((item: any) => (
                        <MetaItem
                          onClick={() => onCategoryClick(item.slug)}
                          key={item.id}
                        >
                          {item.title}
                        </MetaItem>
                      ))
                      : ''}
                  </MetaSingle>
                </ProductMeta>
              </ProductInfo>
            </Scrollbars>
          </ProductInfoWrapper>
        </ProductDetailsWrapper>
      </QuickViewWrapper>
    </>
  );
};

export default QuickView;
