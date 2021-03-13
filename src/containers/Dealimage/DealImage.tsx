import React from "react"
import { DealWrapper, DealPrice } from "./DealImage.style"
const DealImage = () => {
  return (
    <DealWrapper>
      <h1 style={{ color: "#643795", fontWeight: "bold" }}>Mua Hàng Giá Sỉ</h1>
      <DealPrice>
        <div>
          <h1>
            <span>Chỉ từ</span> 3 TRIỆU
          </h1>
        </div>
      </DealPrice>
    </DealWrapper>
  )
}

export default DealImage
