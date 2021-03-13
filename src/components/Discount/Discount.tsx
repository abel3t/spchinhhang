import React from 'react'
import { DiscountPercent } from './Discount.style'

type DiscountProps = {
  color?: any
  discountInPercent?: number
  className?: string,
  props?: any
}

const Discount: React.FC<DiscountProps &
  React.HTMLAttributes<HTMLDivElement>> = ({
  discountInPercent,
  color,
  className,
  ...props
}) => {
  return (
    <DiscountPercent className={className} color={color} {...props}>
      {discountInPercent}%
    </DiscountPercent>
  )
}

export default Discount
