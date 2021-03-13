import React from 'react'
import {
  ProductReviewWrapper,
  Input,
  TextReviewInput,
  Button,
  ButtonSelectImage,
  ButtonSelect,
} from './ProductReview.style'
import Rating from 'components/Rating/Rating'
import { SelectImage, NextLogin } from 'components/AllSvgIcon'
type ProductReviewProps = {}

const ProductReview: React.FunctionComponent<ProductReviewProps> = () => {
  return (
    <ProductReviewWrapper className="mt-4  ">
      <div style={{ borderBottom: '1px solid #E8E9EF' }}>
        <p className="bold sm-text ml-3 py-3">Gữi nhận xét của bạn</p>
      </div>
      <div className="px-3 py-3 ">
        <form>
          <div className="d-flex">
            <p className="pb-3 mr-4">1. Đánh giá về sản phẩm của bạn</p>
            <Rating />
          </div>
          <p className="pb-3">2. Tiêu đề của nhận xét</p>
          <Input
            type="text"
            placeholder="Nhập tiêu đề nhận xét (Không bắt buộc)"
            required
          />
          <p className="pb-3">3. Viết nhận xét của bạn vào bên dưới</p>
          <TextReviewInput>
            <textarea placeholder="Nhập tiêu đề nhận xét (Không bắt buộc)" />
          </TextReviewInput>
          <div className="d-flex mt-3 align-items-center">
            <span className="pb-3 mr-3 ">4. Thêm hình sản phẩm nếu có </span>
            <ButtonSelectImage className="position-relative">
              <div className="h-100 d-flex justify-content-center align-items-center">
                  <SelectImage />
                <ButtonSelect
                  title={'Chọn hình'}
                  className="select-image "
                  type="file"
                  name="file"
                  id="file"
                />
                <label className="title mx-3" htmlFor="file">
                  {' '}
                  Chọn hình
                </label>
              </div>
            </ButtonSelectImage>
          </div>
          <br />
          <Button
            className="send-review my-3"
            title="Gửi nhận xét"
            icon={<NextLogin />}
          />
          <p className="pb-2">
            * Để nhận xét được duyệt, quý khách lưu ý tham khảo{' '}
            <a href='asd' style={{ color: '#0091FF',textDecoration:'none' }}>tiêu chí duyệt</a> của chúng
            tôi
          </p>
        </form>
      </div>
    </ProductReviewWrapper>
  )
}

export default ProductReview
