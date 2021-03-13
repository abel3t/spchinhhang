import React, { useContext } from 'react';
import Router from 'next/router';
import { closeModal } from '@redq/reuse-modal';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from 'components/Button/Button';
import InputIncDec from 'components/InputIncDec/InputIncDec';
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
  ModalClose,
} from './QuickView.style';
import { CURRENCY } from 'helper/constant';
import { CloseIcon, CartIcon } from 'components/AllSvgIcon';
import { CartContext } from 'contexts/cart/cart.context';
import { findProductIndex, getProductQuantity } from 'helper/utility';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import LanguageContext from 'contexts/language/language.context';

type QuickViewProps = {
  modalProps: any;
  deviceType: any;
  onModalClose: any;
};

const QuickView: React.FunctionComponent<QuickViewProps> = ({
  modalProps,
  deviceType,
  onModalClose,
}) => {
  const { add, update, products } = useContext(CartContext);
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
    categories,
  } = modalProps;

  const {
    state: { lang },
  }: any = useContext(LanguageContext);

  const index = findProductIndex(products, id);
  const quantity = getProductQuantity(products, index);

  const handleClick = (e: any) => {
    e.stopPropagation();
    add(e, modalProps);
  };

  const handleUpdate = (value: number, e: any) => {
    if (index === -1 && value === 1) {
      add(e, modalProps);
    } else {
      update(id, value);
    }
  };
  function onCategoryClick(slug) {
    Router.push({
      pathname: `/${type.toLowerCase()}`,
      query: { category: slug },
    }).then(() => window.scrollTo(0, 0));
    closeModal();
  }

  return (
    <>
      <ModalClose onClick={onModalClose}>
        <CloseIcon />
      </ModalClose>
      <QuickViewWrapper>
        <ProductDetailsWrapper className='product-card' dir='ltr'>
          {lang === 'ar' || lang === 'he' ? (
            ''
          ) : (
            <ProductPreview>
              <CarouselWithCustomDots items={gallery} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          )}
          <ProductInfoWrapper
            dir={lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr'}
          >
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
                        {CURRENCY}
                        {price}
                      </SalePrice>
                    ) : (
                      ''
                    )}

                    <ProductPrice>
                      {CURRENCY}
                      {salePrice ? salePrice : price}
                    </ProductPrice>
                  </ProductPriceWrapper>
                  <ProductCartBtn>
                    {quantity <= 0 ? (
                      <Button
                        title='Cart'
                        intlButtonId='addCartButton'
                        iconPosition='left'
                        colors='primary'
                        size='small'
                        variant='outlined'
                        className='cart-button'
                        icon={<CartIcon />}
                        onClick={e => handleClick(e)}
                      />
                    ) : (
                      <InputIncDec
                        value={quantity}
                        // onUpdate={(value: number, e: any) =>
                        //   handleUpdate(value, e)
                        // }
                      />
                    )}
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

          {lang === 'ar' || lang === 'he' ? (
            <ProductPreview>
              <CarouselWithCustomDots items={gallery} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          ) : (
            ''
          )}
        </ProductDetailsWrapper>
      </QuickViewWrapper>
    </>
  );
};

export default QuickView;
