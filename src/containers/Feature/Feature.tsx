import React from 'react'
import TopdealImage from '../../image/top_deal.png'
import TopdealImage2 from '../../image/top_deal_2.png'
import TopdealImage3 from '../../image/top_deal_3.png'
import TopdealImage4 from '../../image/top_deal_4.png'
import TopdealImage5 from '../../image/top_deal_5.png'
import Shipping_icon from '../../image/shipping_icon.svg'
import Return_icon from '../../image/return_icon.svg'
import Verify_icon from '../../image/verify_icon.svg'
import Start_icon from '../../image/start_icon.svg'
import Contact_icon from '../../image/support_icon.svg'
import Image from 'components/Image/Image'
import { FeatureContent, FeatureCol } from './Feature.style'
type FeatureProps = {}
export const Feature: React.FC<FeatureProps> = () => {
  return (
    <FeatureContent>
      <div className="d-flex flex-column flex-md-row">
        <div className="col-12 col-md-8 px-0 pr-md-1">
          <Image className="fill" url={TopdealImage} alt="Banner" />
        </div>
        <div className="col-12 col-md-4 px-0 pl-md-1 d-flex flex-md-column">
          <div className="mb-md-2">
            <Image className="fill" url={TopdealImage2} alt="Free ship" />
          </div>
          <div>
            <Image className="fill" url={TopdealImage3} alt="Free ship" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row mt-md-2">
        <div className="col-12 col-md-8 px-0 pr-md-1">
          <Image className="fill" url={TopdealImage4} alt="Banner top deal" />
        </div>
        <div className="col-12 col-md-4 px-0 pl-md-1">
          <Image className="fill" url={TopdealImage5} alt="Funiture" />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <FeatureCol className="col-12 col-md-4">
            <div className="feature-col">
              <div>
                <Image
                  className="logo-feature"
                  url={Shipping_icon}
                  alt="shipping"
                />
              </div>
              <div>
                <h4 className="fs-14 bold">Miễn phí vận chuyển</h4>
                <p className="fs-13">Toàn quốc trên đơn hàng {'>'}10 triệu</p>
              </div>
            </div>
          </FeatureCol>
          <FeatureCol className="col-12 col-md-4">
            <div className="feature-col">
              <div>
                <Image
                  className="logo-feature"
                  url={Return_icon}
                  alt="shipping"
                />
              </div>
              <div>
                <h4 className="fs-14 bold">Chính sách đổi trả</h4>
                <p className="fs-13">Trả hàng linh hoạt trong 30 ngày</p>
              </div>
            </div>
          </FeatureCol>
          <FeatureCol className="col-12 col-md-4">
            <div className="feature-col">
              <div>
                <Image
                  className="logo-feature"
                  url={Verify_icon}
                  alt="shipping"
                />
              </div>
              <div>
                <h4 className="fs-14 bold">Nguồn hàng uy tín</h4>
                <p className="fs-13">
                  Hàng nhập khẩu chính hãng, nguồn gốc rõ ràng
                </p>
              </div>
            </div>
          </FeatureCol>
          <FeatureCol className="col-12 col-md-4">
            <div className="feature-col">
              <div>
                <Image className="logo-feature" url={Start_icon} alt="shipping" />
              </div>
              <div>
                <h4 className="fs-14 bold">Chiết khấu cao</h4>
                <p className="fs-13">Mua càng nhiều giá càng giảm </p>
              </div>
            </div>
          </FeatureCol>
          <FeatureCol className="col-12 col-md-4">
            <div className="feature-col">
              <div>
                <Image
                  className="logo-feature"
                  url={Contact_icon}
                  alt="shipping"
                />
              </div>
              <div className="px-1">
                <h4 className="fs-14 bold">Kênh hổ trợ 24/7</h4>
                <p className="fs-13">Kênh hỗ trợ khách hàng 24/7</p>
              </div>
            </div>
          </FeatureCol>
        </div>
      </div>
    </FeatureContent>
  )
}

export default Feature
