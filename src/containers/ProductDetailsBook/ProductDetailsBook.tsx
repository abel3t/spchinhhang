import React, { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Button from 'components/Button/Button';
import InputIncDec from 'components/InputIncDec/InputIncDec';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  BookTitle,
  BackButton,
  AuthorName,
  BookDescriptionWrapper,
  BookDescription,
  BookMetaTable,
  BookMetaTableRow,
  BookMetaItem,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  DetailsWrapper,
  DetailsTitle,
  Description,
  Avatar,
  SocialNetworks,
  SocialIcon,
  RelatedItems,
} from './ProductDetailsBook.style';
import {
  LongArrowLeft,
  CartIcon,
  InkPen,
  AdobeIcon,
  Facebook,
  GooglePlus,
  Twitter,
  Linkedin,
} from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import { CartContext } from 'contexts/cart/cart.context';
import { CURRENCY } from 'helper/constant';
import { findProductIndex, getProductQuantity } from 'helper/utility';
import { Product } from 'interfaces';
import Products from 'containers/Products/ProductsBook';
import { FormattedMessage } from 'react-intl';

type ProdutDetailsProps = {
  product: Product | any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProdutDetailsProps> = ({
  product,
  deviceType,
}) => {
  const { add, update, products } = useContext(CartContext);
  const data = product;
  const index = findProductIndex(products, data.id);
  const quantity = getProductQuantity(products, index);
  const scrollRef = useRef(null);
  const router = useRouter()

  const scrollToDiv = e => {
    e.preventDefault();
    // scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      top:
        scrollRef.current.getBoundingClientRect().top + window.pageYOffset - 65,
      behavior: 'smooth',
    });
  };

  const handleClick = e => {
    e.stopPropagation();
    add(e, data);
  };

  const handleUpdate = (value: number, e: any) => {
    if (index === -1 && value === 1) {
      add(e, data);
    } else {
      update(data.id, value);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <>
      <ProductDetailsWrapper className='product-card'>
        <ProductPreview>
          <BackButton>
            <Button
              title='Back'
              intlButtonId='backBtn'
              iconPosition='left'
              size='small'
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #f1f1f1',
                color: '#77798c',
              }}
              icon={<LongArrowLeft />}
              onClick={router.back}
            />
          </BackButton>

          <img
            src={product.gallery[0].url}
            alt={product.title}
            className='product-image'
          />
        </ProductPreview>

        <ProductInfo>
          <BookTitle>{product.title}</BookTitle>
          <AuthorName>
            <InkPen /> {product.author.name}
          </AuthorName>
          <BookDescriptionWrapper>
            <BookDescription>
              {product.description.substring(0, 600)}
              <a
                href='#'
                onClick={scrollToDiv}
                style={{ color: '#009e7f', fontWeight: 700 }}
              >
                Read More
              </a>
            </BookDescription>
            <BookMetaTable>
              {product.meta
                ? Object.entries(product.meta).map(([item], i, arr): any =>
                    i !== arr.length - 1 && i !== arr.length - 2 ? (
                      <BookMetaTableRow key={i}>
                        <BookMetaItem>
                          {item.replace(/^[a-z]|[A-Z]/g, function(v, i) {
                            return i === 0
                              ? v.toUpperCase()
                              : ' ' + v.toLowerCase();
                          })}
                        </BookMetaItem>
                        <BookMetaItem>
                          {item === 'languages'
                            ? product.meta[item].map(
                                (lang, i, arr): any =>
                                  lang.charAt(0).toUpperCase() +
                                  lang.slice(1) +
                                  (i !== arr.length - 1 ? ', ' : '')
                              )
                            : product.meta[item]}
                        </BookMetaItem>
                      </BookMetaTableRow>
                    ) : (
                      ''
                    )
                  )
                : ''}
            </BookMetaTable>
          </BookDescriptionWrapper>

          <ProductCartWrapper>
            <ProductPriceWrapper>
              {product.discountInPercent ? (
                <SalePrice>
                  {CURRENCY}
                  {product.price}
                </SalePrice>
              ) : (
                ''
              )}

              <ProductPrice>
                {CURRENCY}
                {product.salePrice ? product.salePrice : product.price}
              </ProductPrice>
            </ProductPriceWrapper>

            <ProductCartBtn>
              {quantity <= 0 ? (
                <Button
                  title='Add to Cart'
                  intlButtonId='addToCartButton'
                  iconPosition='left'
                  size='small'
                  className='cart-button'
                  icon={<CartIcon />}
                  onClick={e => handleClick(e)}
                />
              ) : (
                <InputIncDec
                  value={quantity}
                  onClick={(e: any) => {
                    e.stopPropagation(onclick);
                  }}
                  // onUpdate={(value: number, e) => handleUpdate(value, e)}
                />
              )}

              {product.meta && product.meta.samplePDF.length !== 0 ? (
                <Button
                  title='Read Free Sample'
                  intlButtonId='readFreeSampleButton'
                  iconPosition='left'
                  size='small'
                  variant='outlined'
                  className='outline-button'
                  icon={<AdobeIcon />}
                />
              ) : (
                ''
              )}
            </ProductCartBtn>
          </ProductCartWrapper>
          {/* <ProductMeta>
            <MetaSingle>
              {product.categories
                ? product.categories.map((item: any) => (
                    <Link
                      href={`/${product.type}?category=${item.slug}`}
                      key={`link-${item.id}`}
                    >
                      {
                        <a>
                          <MetaItem>{item.title}</MetaItem>
                        </a>
                      }
                    </Link>
                  ))
                : ''}
            </MetaSingle>
          </ProductMeta> */}
        </ProductInfo>
      </ProductDetailsWrapper>

      <DetailsWrapper ref={scrollRef}>
        <DetailsTitle>
          <FormattedMessage
            id='bookSectionTitle'
            defaultMessage='About The Book'
          />
        </DetailsTitle>
        <Description>{product.description}</Description>
      </DetailsWrapper>

      <DetailsWrapper>
        <DetailsTitle>
          <FormattedMessage
            id='authorSectionTitle'
            defaultMessage='About The Author'
          />
        </DetailsTitle>
        <AuthorName>
          {product.author.avatar && product.author.avatar.length !== 0 ? (
            <Avatar>
              <img src={product.author.avatar} alt={product.author.name} />
            </Avatar>
          ) : (
            <InkPen />
          )}

          {product.author.name}
        </AuthorName>

        <Description>{product.author.bio}</Description>
        <SocialNetworks>
          {product.author &&
            product.author.socials.map(item =>
              item.profileLink.length !== 0 ? (
                <SocialIcon>
                  <a key={item.id} href={item.profileLink} target='_blank'>
                    {item.media === 'facebook' ? (
                      <Facebook color='#3b5999' />
                    ) : item.media === 'twitter' ? (
                      <Twitter color='#55acee' />
                    ) : item.media === 'google' ? (
                      <GooglePlus color='#dd4b39' />
                    ) : item.media === 'linkedin' ? (
                      <Linkedin color='#0077B5' />
                    ) : (
                      ''
                    )}
                  </a>
                </SocialIcon>
              ) : (
                ''
              )
            )}
        </SocialNetworks>
      </DetailsWrapper>

      <RelatedItems>
        <h2>
          <FormattedMessage
            id='intlReletedItems'
            defaultMessage='Related Items'
          />
        </h2>
        <Products
          type={product.type.toLowerCase()}
          deviceType={deviceType}
          loadMore={false}
          fetchLimit={10}
        />
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
