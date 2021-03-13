import React, { useState } from "react"
import { useRouter } from "next/router"
import {
  ProductConfigWrapper,
  BackButton,
  Title,
  Section,
  RadioOption,
  ProductPriceWrapper
} from "./ProductConfig.style"
import {
  ChervonDown,
  ArrowPrev,
  CheckRedCircle,
  CartIcon
} from "components/AllSvgIcon"
import Button from "components/Button/Button"
import Popover from "components/Popover/Popover"
import RadioGroup from "components/RadioGroup/RadioGroup"
import InputIncDec from "components/InputIncDec/InputIncDec"
import DisCountPercent from "components/Discount/Discount"
import Divider from "components/Divider/Divider"
import {
  ProductColor,
  ProductCartBtn,
  ProductActions
} from "../ProductDetails/ProductDetails.style"
import { Product } from "interfaces"
import PaymentIcon from "image/ic_payment.svg"
import { formatter } from "helper/utility"
type ProductConfigProps = {
  onBack: Function
  counter: number
  onCounterChange: Function
  handleAddToCart: any
  product: Product | any
  currency: any
}

const options = [
  { label: "Lựa chọn 1", value: 1 },
  { label: "Lựa chọn 2", value: 2 }
]

const colors = [
  {
    color: "#3B3B3B",
    id: 1
  },
  {
    color: "#DEDEDE",
    id: 2
  },
  {
    color: "#F5A623",
    id: 3
  }
]

const SectionWrapper = ({ title, children }) => {
  return (
    <Section>
      <p className='title'>{title}</p>
      {children}
    </Section>
  )
}

export const ProductConfig: React.FC<ProductConfigProps> = ({
  onBack,
  counter,
  onCounterChange,
  handleAddToCart,
  product,
  currency
}) => {
  const [selectedOption, setOption] = useState(options[0].value)
  const [currentColor, setColor] = useState(colors[0].id)
  const router = useRouter()
  return (
    <ProductConfigWrapper>
      <BackButton onClick={onBack} icon={<ArrowPrev />} />
      <Title>
        <strong>Thuộc tính sản phẩm</strong>
      </Title>
      <SectionWrapper title='Lựa chọn khác'>
        <RadioGroup
          items={options}
          component={(item: any) => (
            <RadioOption
              key={`option-config-${item.value}`}
              onClick={() => setOption(item.value)}
              className='d-flex'
            >
              <button
                className={`radio-btn ${
                  item.value === selectedOption ? "selected" : ""
                }`}
              />{" "}
              {item.label}
            </RadioOption>
          )}
        />
      </SectionWrapper>
      <SectionWrapper title='Lựa chọn'>
        <Popover
          direction='right'
          className='option-dropdown'
          handler={
            <Button
              fullwidth
              className='bold icon-right'
              variant='outlined'
              title='Lựa chọn đây'
              icon={<ChervonDown />}
              iconPosition='right'
            />
          }
          content={<div>Content</div>}
        />
      </SectionWrapper>
      <SectionWrapper title='Màu sắc'>
        <RadioGroup
          items={colors}
          component={(item: any) => (
            <RadioOption
              key={`${item.id}-color`}
              onClick={() => setColor(item.id)}
              className='d-flex'
            >
              <ProductColor
                width={44}
                height={44}
                className={`ml-0 ${item.id === currentColor ? "selected" : ""}`}
                color={item.color}
              >
                {item.id === currentColor && (
                  <CheckRedCircle className='checked-icon' />
                )}
              </ProductColor>
            </RadioOption>
          )}
        />
      </SectionWrapper>
      <SectionWrapper title='Giao hàng dự kiến'>
        <Popover
          direction='right'
          handler={
            <p>
              <strong style={{ color: "#417505" }}>Miễn phí giao hàng</strong>{" "}
              <span>nội thành</span> <strong>TP HCM</strong>{" "}
              <ChervonDown color='black' />
            </p>
          }
          content={<div>Content</div>}
        />
      </SectionWrapper>
      <Divider top={64} bottom={20} />
      <SectionWrapper title='Số lượng'>
        <ProductCartBtn className='row-start'>
          <InputIncDec
            className='mr-3'
            value={counter}
            onClick={(e: any) => {
              e.stopPropagation(onclick)
            }}
            onUpdate={onCounterChange}
          />
          {product.unit}
        </ProductCartBtn>
      </SectionWrapper>
      <ProductPriceWrapper className='row-between'>
        {product.salePrice ? (
          <div>
            <p>Giá lẻ</p>
            <strong className='sub-title price'>
              {formatter(currency).format(product.price)}
            </strong>{" "}
            <DisCountPercent
              color='success'
              discountInPercent={product.discountInPercent}
            />
          </div>
        ) : (
          <div />
        )}
        <div>
          <p>Tạm tính</p>
          <strong className='sub-title sale-price'>
            {formatter(currency).format(
              product.salePrice ? product.salePrice : product.price
            )}
          </strong>
        </div>
      </ProductPriceWrapper>
      <ProductActions className='d-flex flex-column flex-md-row mt-4'>
        <Button
          fullwidth
          icon={<img src={PaymentIcon} />}
          iconPosition='left'
          className='icon-left w-md-50 mr-3 mb-2'
          title='Thanh toán'
          onClick={() => router.push("/cart")}
        />
        <Button
          fullwidth
          style={{ borderRadius: 10 }}
          icon={<CartIcon color='#D71F28' />}
          iconPosition='left'
          className='icon-left w-md-50 primary'
          title={<span className='primary-text'>Thêm vào giỏ</span>}
          variant='outlined'
          onClick={handleAddToCart}
        />
      </ProductActions>
    </ProductConfigWrapper>
  )
}

export default ProductConfig
