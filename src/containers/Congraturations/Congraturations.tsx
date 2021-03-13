import React from "react"
import {
  CongratulationsWapper,
  BgCongratulation,
  Button
} from "./Congratulation.style"
import logo50M from "../../image/50trieu.png"
import Progress from "../../image/progress.png"
import Link from 'next/link'
const Congraturations = () => {
  return (
    <CongratulationsWapper>
      <div className='py-5'>
        <BgCongratulation>
          <img src={logo50M} alt='50 trieu' />
          <h3 className='bold mt-3'> Hạng TGS 50 Triệu</h3>
        </BgCongratulation>
        <div className='text-center mb-5'>
          <img className='py-4' src={Progress} alt='loadding ...' />
          <br />
          <Button className='mb-2 money ' title='1.250.000 đ' />
          <p>chờ ghi nhận vào doanh số</p>
        </div>
        <div className='text-center'>
            <Link href='/order'>
          <Button className='order' title='Xem lại đơn mua hàng của tôi' />
            </Link>
        </div>
      </div>
    </CongratulationsWapper>
  )
}

export default Congraturations
