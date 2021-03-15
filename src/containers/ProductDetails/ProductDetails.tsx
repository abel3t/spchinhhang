import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Button from 'components/Button/Button';
import InputIncDec from 'components/InputIncDec/InputIncDec';
import VerticalDivider from 'components/VerticalDivider/VerticalDivider';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitle,
  ProductCartWrapper,
  ProductPriceWrapper,
  SalePrice,
  ProductCartBtn,
  FavoriteButton,
  ProductActions,
  ProductColor,
  ProductReview,
  ProductRetailPrice,
  ProductWholeSalePrice,
  MonthSales,
  Price,
  PriceDescription,
  DealCarouselWrapper,
  CarouselHeaderWrapper,
  CarouselButtonGroupWrapper,
  CarouselItemWrapper
} from './ProductDetails.style';
import {
  CartIcon,
  FavoriteIcon,
  ArrowNext,
  ArrowPrev,
  InfoIcon,
  MessageRedIcon,
  FbIcon,
  NextLogin
} from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import Rating from 'components/Rating/Rating';
import DiscountPolicy from 'containers/DiscountPolicy/DiscountPolicy';
import { Product } from 'interfaces';
import SaleLevel50 from 'image/sale_level_50.png';
import GiftIcon from 'image/ic_gift.svg';
import ProductInformation from '../ProductInformation/ProductInfomation';
import ProductionConfig from '../ProductConfig/ProductConfig';
import Carousel from 'react-multi-carousel';
import Image from '../../components/Image/Image';
import SampleProduct from 'image/sample_product.png';
import Discount from '../../components/Discount/Discount';
import ProductsReview from '../ProductReview/ProductReview';
import { formatter } from 'helper/utility';

type ProdutDetailsProps = {
  product: Product | any
  deviceType: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const ProductDetails: React.FunctionComponent<ProdutDetailsProps> = ({
  product,
  deviceType
}) => {
  const [ counter, setCounter ] = useState(1);
  const [ tab, setTab ] = useState('info');
  const data = product;
  const onCounterChange = (value: number, e: any) => {
    setCounter(Number(value));
  };

  const CarouselHeader = ({ title, titleStyle, titleClass }: any) => {
    return (
      <CarouselHeaderWrapper>
        <div>
          <span style={titleStyle} className={titleClass}>
            {title}
          </span>
        </div>
      </CarouselHeaderWrapper>
    );
  };
  const CarouselButtonGroup = ({ previous, next }: any) => {
    return (
      <CarouselButtonGroupWrapper>
        <Button
          variant="textButton"
          onClick={previous}
          title=""
          icon={<ArrowPrev/>}
        />
        <Button
          variant="textButton"
          onClick={next}
          title=""
          icon={<ArrowNext/>}
        />
      </CarouselButtonGroupWrapper>
    );
  };
  const CarouselItem = ({
    price,
    title,
    image,
    discountInPercent,
    ...props
  }: any) => {
    return (
      <CarouselItemWrapper {...props}>
        <Image className="product-img" url={image} alt="Hình ảnh sản phẩm"/>
        <Discount
          className="top-right-carousel"
          color="danger"
          discountInPercent={discountInPercent}
        />
        <div className="product-title ellipsis-2">{title}</div>
        <strong className="product-price">{price}</strong>
      </CarouselItemWrapper>
    );
  };
  const mockupDeals = new Array(10).fill({
    price: '1.700.000 đ - 2.100.000 đ',
    title: 'Kem Dưỡng Mắt Dr.Denis Gross Ferulic + Retinol and so on content',
    image: SampleProduct,
    discountInPercent: -20
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 991, min: 592 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 591, min: 0 },
      items: 1
    }
  };
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <div
      style={deviceType.mobile ? { padding: '0px' } : { padding: '0px 40px' }}
    >
      <ProductDetailsWrapper className="product-card" dir="ltr">
        <ProductPreview>
          <FavoriteButton>
            <FavoriteIcon/>
          </FavoriteButton>
          <ProductTitle>{product.title}</ProductTitle>
          <CarouselWithCustomDots
            items={product.gallery}
            deviceType={deviceType}
          />
        </ProductPreview>
        <ProductInfo>
          {tab === 'info' ?
            <>
              <ProductPriceWrapper className="row-between">
                <ProductRetailPrice>
                  <Price>100K</Price>
                  <PriceDescription>Giá lẻ</PriceDescription>
                </ProductRetailPrice>
                <VerticalDivider className="mx-3" style={{ fontSize: 32 }}/>
                <ProductWholeSalePrice>
                  <Price className="hot">150k</Price>
                  <PriceDescription>Giá sỉ khi đặt tối thiểu 5 sản phẩm</PriceDescription>
                </ProductWholeSalePrice>
              </ProductPriceWrapper>
              <MonthSales>
                <div className="d-flex mb-3">
                  <img width="48" height="48" className="mr-3" src={SaleLevel50} alt="level"/>
                  <div>
                    <span className="lh-20">Doanh số tháng của bạn</span> <br/>
                    <strong className="sm-text lh-20">70.000.000 đ</strong>
                  </div>
                </div>
                <div>
                  <DiscountPolicy tgsSale={50} nccSale={100}/>
                </div>
              </MonthSales>
              <ProductReview>
                <p>Hàng bán bởi: Xiaomiyouklink (98.8% đánh giá tốt)</p>
                <Rating readonly initialRating={4.5}/> <Link href="/"><a className="link">(96 đánh giá)</a></Link>
                {/* <ProductWeight>{product.unit}</ProductWeight>
            <ProductDescription>
              <ReadMore character={600}>{product.description}</ReadMore>
            </ProductDescription> */}
              </ProductReview>
              <ProductCartWrapper>
                <div className="row-start flex-wrap">
                  <div className='mr-4'>Thuộc tính sản phẩm</div>
                  <div className="row-start">
                    <div className="row-start mr-4">
                      <span>Màu</span>
                      <ProductColor color="#3B3B3B"/>
                    </div>
                    <div className="row-start mr-4">
                      <span>Size</span>
                      <strong className="ml-2">XL</strong>
                    </div>
                    <div>
                      <Button onClick={() => setTab('config')} className="link" variant="textButton" title="Thay đổi"/>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div>Số lượng</div>
                  <ProductCartBtn className="row-start flex-wrap">
                    <InputIncDec
                      className="mr-3 mb-2"
                      value={counter}
                      onClick={(e: any) => {
                        e.stopPropagation(onclick);
                      }}
                      onUpdate={onCounterChange}
                    />
                    {product.unit}
                    {true && <div className="ml-2 d-flex">
                      <img src={GiftIcon} alt="gift"/> <Button className="link px-1 px-md-3"
                                                               title="Quà đi cùng với sản phẩm" variant="textButton"/>
                    </div>}
                  </ProductCartBtn>
                </div>
                <div>
                  <div>Tổng giá tiền <InfoIcon/></div>
                  <SalePrice className="sub-title">
                    <strong className="mr-1">120k</strong>
                  </SalePrice>
                  <ProductActions className="d-flex flex-column flex-md-row mt-4">
                    <Button fullwidth icon={<CartIcon/>} iconPosition="left" className="icon-left w-md-50 mr-3 mb-2"
                            title="Đặt hàng"/>
                    <Button fullwidth style={{ borderRadius: 10 }} icon={<MessageRedIcon/>} iconPosition="left"
                            className="icon-left w-md-50 primary"
                            title={<span className="primary-text">Gửi tin nhắn</span>} variant="outlined"
                            onClick={() => { }}/>
                  </ProductActions>
                </div>
              </ProductCartWrapper>
            </> : <ProductionConfig currency={100} handleAddToCart={() => console.log('OK')} product={product}
                                    counter={counter} onCounterChange={onCounterChange} onBack={() => setTab('info')}/>}
        </ProductInfo>
      </ProductDetailsWrapper>
      <ProductInformation product={product} percentage={50} deviceType={deviceType}/>
      <ProductsReview/>
      <DealCarouselWrapper>
        <CarouselHeader titleClass="bold ml-1" title="Sản phẩm liên quan"/>
        <Carousel
          className="py-3"
          arrows={false}
          responsive={responsive}
          ssr={true}
          showDots={false}
          infinite={true}
          slidesToSlide={1}
          autoPlay={true}
          autoPlaySpeed={3000}
          renderButtonGroupOutside={true}
          additionalTransfrom={0}
          customButtonGroup={<CarouselButtonGroup/>}
          // use dir ltr when rtl true
        >
          {mockupDeals.map((item, index) => (
            <CarouselItem key={`deal-${index}`} {...item} />
          ))}
        </Carousel>
      </DealCarouselWrapper>
    </div>
  );
};

export default ProductDetails;
