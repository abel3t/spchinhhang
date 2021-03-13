import React, { useState, useEffect, useContext } from "react"
import gql from "graphql-tag"
import { Scrollbars } from "react-custom-scrollbars"
import { useQuery } from "@apollo/react-hooks"
import {
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemPrice,
  NoOrderFound,
  ItemCards,
  ItemImgWrapper,
  ItemTitle,
  ItemProps,
  ItemProvider,
  BuyLaterButton,
  ItemRight,
  TotalPrice,
  ItemPriceDiscount,
  Button
} from "./Order.style"

import OrderDetails from "./SingleOrderDetails/OrderDetails"
import OrderCard from "./OrderCard/OrderCard"
import OrderCardMobile from "./OrderCard/orderCardMobile"
import useComponentSize from "helper/useComponentSize"
import { FormattedMessage } from "react-intl"
import { ProductColor } from "containers/ProductDetails/ProductDetails.style"
import Link from "next/link"
import InputNumber from "components/InputIncDec/InputIncDec"
import DiscountPercent from "components/Discount/Discount"
import { Product } from "interfaces"
import { CartContext } from "contexts/cart/cart.context"
import { calculateItemPrice } from "helper/utility"
import { formatter } from "helper/utility"
import CurrencyContext from "contexts/currency/currency.context"

const progressData = ["Order Received", "Order On The Way", "Order Delivered"]

const GET_ORDERS = gql`
  query getAllOrders($text: String, $user: Int!, $limit: Int) {
    orders(text: $text, limit: $limit, user: $user) {
      id
      status
      deliveryAddress
      amount
      date
      subtotal
      deliveryFee
      discount
      deliveryTime
      products {
        title
        price
        total
        image
        weight
        quantity
        id
      }
    }
  }
`

const orderTableColumns = [
  {
    title: <FormattedMessage id='cartItems' defaultMessage='Items' />,
    dataIndex: "",
    key: "items",
    render: (text, record) => {
      return (
        <ItemWrapper>
          <ImageWrapper>
            <img src={record?.image} alt={record?.title} />
          </ImageWrapper>

          <ItemDetails>
            <ItemName>{record?.title}</ItemName>
            <ItemSize>{record?.weight}</ItemSize>
            <ItemPrice>${record?.price}</ItemPrice>
          </ItemDetails>
        </ItemWrapper>
      )
    }
  },
  {
    title: (
      <FormattedMessage id='intlTableColTitle2' defaultMessage='Quantity' />
    ),
    dataIndex: "quantity",
    key: "quantity",
    align: "center"
  },
  {
    title: <FormattedMessage id='intlTableColTitle3' defaultMessage='Price' />,
    dataIndex: "",
    key: "price",
    align: "right",
    render: (text, record) => {
      return <p>${record.total}</p>
    }
  }
]

type OrderTableProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const OrdersContent: React.FC<OrderTableProps> = ({
  deviceType: { mobile, tablet, desktop }
}) => {
  const [order, setOrder] = useState(null)
  const [active, setActive] = useState("")

  const [targetRef, size] = useComponentSize()
  const orderListHeight = size.height - 79
  const { data, error, loading } = useQuery(GET_ORDERS, {
    variables: {
      limit: 7,
      user: 1
    }
  })
  const {
    products,
    totalPrice,
    subtotalPrice,
    update,
    addCoupon,
    coupon
  } = useContext(CartContext)
  useEffect(() => {
    if (data.orders && data.orders.length !== 0) {
      setOrder(data.orders[0])
      setActive(data.orders[0].id)
    }
  }, [data.orders])

  if (loading) {
    return <div>loading...</div>
  }

  if (error) return <div>{error.message}</div>

  const handleClick = (order) => {
    setOrder(order)
    setActive(order.id)
  }

  // console.log(data.orders, 'data.orders', order, 'order');
  console.log("asd", data.orders)
  const CartItem = ({ order }) => {
    const {
      state: { currency }
    }: any = useContext(CurrencyContext)

    return (
      <>
        <div
          className='w-100 mb-2'
          style={{ border: "1px solid #D0021B", borderRadius: "10px" }}
        >
          <div
            className='d-flex justify-content-between mb-3'
            style={{ borderBottom: "1px solid #E8E9EF" }}
          >
            <div className='px-4 py-4'>
              <h6>
                #{order?.id}
                <span
                  className='ml-2 bold'
                  style={{
                    color: "#F77A00",
                    fontSize: "12px",
                    whiteSpace: "nowrap"
                  }}
                >
                  Mới đặt
                </span>
              </h6>
              <p style={{ color: "#686464" }}>{order?.date} </p>
            </div>
            <div className=' px-3 py-4'>
              <Link href='/cart'>
                <Button
                  className='historyorder'
                  title='Xem chi tiết đơn hàng'
                />
              </Link>
            </div>
          </div>
          {order?.products?.map((product) => {
            const itemPrice = calculateItemPrice(product, product?.price)
            const itemSalePrice = calculateItemPrice(
              product,
              product?.salePrice
            )
            return (
              <ItemCards className='cart-view' key={product.id}>
                <div className='mr-3 d-flex'>
                  <ItemImgWrapper className='cart-view'>
                    <img
                      className='ListImage'
                      src={product?.image}
                      alt={product?.title}
                    />
                  </ItemImgWrapper>
                  <ItemDetails className='cart-view'>
                    <div>
                      <ItemTitle className='cart-view'>
                        {product?.title}
                      </ItemTitle>
                      <ItemProps className='row-start'>
                        <div className='row-start mr-4'>
                          <span>Màu</span>
                          <ProductColor color='#3B3B3B' />
                        </div>
                        <div className='row-start mr-4'>
                          <span>Size</span>
                          <strong className='ml-2'>XL</strong>
                        </div>
                      </ItemProps>
                      <ItemProvider>
                        Cung cấp bởi:{" "}
                        <Link href='/'>
                          <a className='link'>Xiaomi</a>
                        </Link>{" "}
                        (98.8% đánh giá tốt)
                      </ItemProvider>
                    </div>
                  </ItemDetails>
                </div>
                <ItemRight className='d-flex px-3'>
                  <div className='text-right '>
                    <TotalPrice>
                      {formatter(currency).format(
                        product?.salePrice ? itemSalePrice : itemPrice
                      )}
                    </TotalPrice>
                    <div>
                      {product?.salePrice ? (
                        <ItemPriceDiscount className='cart-view mr-2'>
                          {formatter(currency).format(itemPrice)}
                        </ItemPriceDiscount>
                      ) : null}
                      <DiscountPercent
                        color='success'
                        discountInPercent={product?.discountInPercent}
                        style={{ fontSize: 10 }}
                      />
                    </div>
                  </div>
                </ItemRight>
              </ItemCards>
            )
          })}

          <div
            className='text-right px-3 py-3'
            style={{ borderTop: "1px solid #E8E9EF" }}
          >
            <p className=''>
              Tổng số tiền:{" "}
              <span
                className='bold'
                style={{ fontSize: "29px", color: "#D0021B" }}
              >
                {order.amount} đ
              </span>
            </p>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
        {data?.orders?.map((order) => (
          <CartItem order={order} />
        ))}
      <OrderBox>
        {desktop && (
          <>
            <OrderListWrapper style={{ height: size.height }}>
              <Title style={{ padding: "0 20px" }}>
                <FormattedMessage
                  id='intlOrderPageTitle'
                  defaultMessage='My Order'
                />
              </Title>

              <Scrollbars
                universal
                autoHide
                autoHeight
                autoHeightMin={420}
                autoHeightMax={isNaN(orderListHeight) ? 500 : orderListHeight}
              >
                <OrderList>
                  {data.orders.length !== 0 ? (
                    data.orders.map((order: any) => (
                      <OrderCard
                        key={order.id}
                        orderId={order.id}
                        className={order && order.id === active ? "active" : ""}
                        status={progressData[order.status - 1]}
                        date={order.date}
                        deliveryTime={order.deliveryTime}
                        amount={order.amount}
                        onClick={() => {
                          handleClick(order)
                        }}
                      />
                    ))
                  ) : (
                    <NoOrderFound>
                      <FormattedMessage
                        id='intlNoOrderFound'
                        defaultMessage='No order found'
                      />
                    </NoOrderFound>
                  )}
                </OrderList>
              </Scrollbars>
            </OrderListWrapper>

            <OrderDetailsWrapper ref={targetRef}>
              <Title style={{ padding: "0 20px" }}>
                <FormattedMessage
                  id='orderDetailsText'
                  defaultMessage='Order Details'
                />
              </Title>
              {order && order.id && (
                <OrderDetails
                  progressStatus={order.status}
                  progressData={progressData}
                  address={order.deliveryAddress}
                  subtotal={order.subtotal}
                  discount={order.discount}
                  deliveryFee={order.deliveryFee}
                  grandTotal={order.amount}
                  tableData={order.products}
                  columns={orderTableColumns}
                />
              )}
            </OrderDetailsWrapper>
          </>
        )}

        {(mobile || tablet) && (
          <OrderList>
            <OrderCardMobile
              orders={data.orders}
              className={order && order.id === active ? "active" : ""}
              progressData={progressData}
              columns={orderTableColumns}
              onClick={() => {
                handleClick(order)
              }}
            />
          </OrderList>
        )}
      </OrderBox>
    </>
  )
}

export default OrdersContent
