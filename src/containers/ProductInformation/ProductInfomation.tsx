import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProductInformationWrapper, Button } from './ProductInfomation.style';
import {
  ChervonDown,
  ArrowNext,
  ArrowPrev,
  NextLogin
} from '../../components/AllSvgIcon';
import ProcessBar from '../../components/Progress/Progress';
import { Product } from 'interfaces';
import Rating from '../../components/Rating/Rating';
import Pagination from '../../components/Pagination/Pagination';
import UserImage from '../../image/user.jpg';

type ProductInformationProps = {
  product: Product | any
  percentage: number
  deviceType: Object
}

export const ProductInfomation: React.FC<ProductInformationProps> = ({
  product,
  percentage
}) => {
  const [ pagination, setPagination ] = useState({
    page: 3,
    limit: 50,
    totalRow: 1
  });
  const [ filter, setFilter ] = useState({ limit: 10, page: 1 });
  const handlePageChange = (newPage) => {
    console.log('newPage', newPage);
  };
  return (
    <ProductInformationWrapper>
      <Tabs>
        <TabList>
          <Tab>Thông tin sản phẩm</Tab>
          <Tab>Đánh giá sản phẩm</Tab>
        </TabList>
        <TabPanel>
          <div style={{ borderBottom: '1px solid #E8E9EF' }}>
            <div className="mx-3 mb-3 ">
              <p className="lh-24 fs-14">
                Thương hiệu: <span> {product.title}</span>
              </p>
              <p className="fs-14 lh-24">
                Xuất xứ: <span> Trung Quốc</span>
              </p>
              <p className="fs-14 lh-24">
                Dạng sản phẩm:{' '}
                <span style={{ color: '#0091FF' }}> Android TV Box </span>{' '}
              </p>
            </div>
          </div>
          <div className="mx-3  mb-3">
            <p className="my-4 bold">Mô tả</p>
            <p className=" fs-14 lh-24">{product.description}</p>
            <div className="text-center">
              <img src={product.image} alt={product.title}/>
            </div>
            <div className="text-center pb-4">
              <Button title="Xem thêm" icon={<ChervonDown/>}/>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <div
              className="col-12 col-md-4"
              style={{
                borderRight: '1px solid #E8E9EF',
                borderBottom: '1px solid #E8E9EF'
              }}
            >
              <div>
                <div className="px-3 py-3 ">
                  <p className="bold sm-text">95 lượt đánh giá</p>
                  <div className="px-3 py-2">
                    <Rating/>
                  </div>
                  <p>
                    <span className="fs-14" style={{ color: '#D71F28' }}>
                      4.1
                    </span>{' '}
                    trên 5 sao
                  </p>
                  <p className="mt-2 text-lightgray pr-3">
                    Các đánh giá được gữi đến từ những khách hàng đã mua sản
                    phẩm này trên Thế Giới Sĩ
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4"
              style={{
                borderRight: '1px solid #E8E9EF',
                borderBottom: '1px solid #E8E9EF'
              }}
            >
              <div className="d-flex justify-content-between align-items-center px-3 py-3">
                <p>5 sao</p>
                <ProcessBar percentage={percentage} width={275}/>
                <p>61</p>
              </div>
            </div>
            <div className="col-12 col-md-4" style={{ paddingLeft: 0 }}>
              <div style={{ borderBottom: '1px solid #E8E9EF' }}>
                <div className="px-5 py-5 text-center">
                  <p className="bold">Nhận xét về sản phẩm</p>
                  <Button
                    className="mt-2"
                    title="Viết nhận xét"
                    icon={<NextLogin/>}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              borderBottom: '1px solid #E8E9EF',
              marginLeft: 0,
              marginRight: 0
            }}
          >
            <div className="col-12 col-md-3">
              <div className="d-flex px-3 py-3">
                <img
                  style={{ width: 40, height: 40, borderRadius: '50%' }}
                  src={UserImage}
                  alt="user image"
                />
                <div className="ml-2">
                  <p className="bold " style={{ whiteSpace: 'nowrap' }}>
                    Jang Trinh
                  </p>
                  <p className="text-lightgray">TP.HCM</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="d-flex my-3">
                <Rating/>
                <p className="ml-3">
                  Phiên bản: <span className="bold"> {product.title}</span>
                </p>
              </div>
              <p className="lh-17 pr-5">
                Platea et donec. Metus mattis quis. In wisi gravida pede nulla
                vitae. Tortor cillum porttitor eget tristique dolor senectus
                nibh quia dictum at at est in eu phasellus in justo. Tempus et
                et. Magnis lorem dolor. Fusce congue erat. Rhoncus maecenas
                lacus aliquam viverra nunc varius in vestibulum. Ut vivamus
                congue ultrices neque id elit duis mollis. Libero id eleifend.
              </p>
              <img
                style={{ width: 72, height: 72 }}
                src={product.image}
                alt="review"
              />
              <p className="text-lightgray mb-3">24/07/2020</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="px-3 py-3 text-center ">
                <Pagination/>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </ProductInformationWrapper>
  );
};

export default ProductInfomation;
