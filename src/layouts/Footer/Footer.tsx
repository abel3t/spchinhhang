import React, { useContext, useState } from 'react';
import Link from 'next/link';
import FooterWrapper from './Footer.style';
import SupperIcon from 'image/support_icon.svg';
import InteractIcon from 'image/interact_icon.svg';
import DownloadAppleIcon from 'image/download_apple_borderblack.svg';
import DownloadGooglePlayIcon from 'image/download_google_borderblack.svg';
import SubscribeBox from 'components/SubscribeBox/SubscribeBox';
import { LinkinIcon, YoutubeIcon, FbIcon } from 'components/AllSvgIcon';

type FooterProps = {
  deviceType: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const Footer: React.FC<FooterProps> = ({ deviceType }) => {
  return (
    <FooterWrapper className="footer">
      <div className="wrapper footer-contact">
        <div className="row" style={{ height: 30, width: '100%' }}></div>
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 col-lg-3 sub-title mb-3 md-sm-0">
            <p>Đăng ký nhận tin tức từ</p>
            <strong>Thế Giới Sỉ</strong>
          </div>
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <SubscribeBox
              deviceType={deviceType}
              bordered
              style={{
                width: '100%',
                borderRadius: '6px',
                overflow: 'hidden'
              }}
              handleSubscribe={(value: string) => console.log(value)}
              onClick={(value: string) => console.log(value)}
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 footer-social-links justify-content-start justify-content-lg-center">
            <Link href="/">
              <a>
                <LinkinIcon/>
              </a>
            </Link>
            <Link href="/">
              <a className="mx-4">
                <YoutubeIcon/>
              </a>
            </Link>
            <Link href="#">
              <a>
                <FbIcon/>
              </a>
            </Link>
          </div>
        </div>
        <div className="row" style={{ height: 40, width: '100%' }}></div>
        <div className="row">
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Skin Care</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Rửa mặt
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Mặt nạ
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Dưỡng Ẩm
              </a>
              <br/>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Make up</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Mắt mặt
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Mặt
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Môi
              </a>
              <br/>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Body & Hair</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Dưỡng thể
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Sữa tắm
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Dầu gội
              </a>
              <br/>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Cọ & Phụ kiện</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Cọ
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Bọt biển
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Khác
              </a>
              <br/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Thực phẩm chức năng</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Giảm cân
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Tăng sức đề kháng
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Protein sạch
              </a>
              <br/>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Make up</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Mắt mặt
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Mặt
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Môi
              </a>
              <br/>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Body & Hair</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Dưỡng thể
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Sữa tắm
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Dầu gội
              </a>
              <br/>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-5">
            <h4 className="bold body-text">Skin Care</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Rửa mặt
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Mặt nạ
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Dưỡng Ẩm
              </a>
              <br/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row" style={{ height: 40, width: '100%' }}></div>
        <div className="d-md-flex flex-wrap flex-lg-nowrap secondary-text justify-content-md-between">
          <div className="mb-5 mb-lg-0 col-lg-12 px-0 flex-lg-fill footer-address">
            <div>
              <div className="d-flex support">
                <img className="logo-footer" src={SupperIcon} alt="support "/>
                <div className="ml-3">
                  <p className="footer-text">Bạn đang cần hỗ trợ? Hãy gọi</p>
                  <a className="mt-2" href="tel:+84774538888" style={{ color: '#2C2B2B', textDecoration: 'none' }}>
                    <strong className="sub-title lh-20">0774 53 8888</strong>
                  </a>
                </div>
              </div>
              <div className="mt-3 lh-32">
                <p>
                  <strong className="body-text">Địa chỉ:</strong>{' '}
                  <span className="secondary-text">
                    {' '}
                    18 Hoàng Dư Khương, phường 12, quận 10, HCM.
                  </span>
                </p>
                <p>
                  <strong className="body-text">Email:</strong>{' '}
                  <a
                    href="mailto:abeltran.develop@gmail.com"
                    className="secondary-text">
                    {' '}
                    abeltran.develop@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="body-text">Facebook:</strong>
                  <a
                    href="https://www.facebook.com/"
                    className="secondary-text">
                    {' '}
                    spchinhhang.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-12 px-0 flex-fill">
            <h4 className="bold body-text">Thông tin</h4>
            <div className="pt-2 lh-32">
              <a href="#" className="secondary-text">
                Chính sách mua hàng
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Liên hệ
              </a>
              <br/>
              <a href="#" className="secondary-text">
                Hỗ trợ khách hàng
              </a>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ height: 40, width: '100%' }}></div>
      <div className="line"/>
      <div className="wrapper py-3 footer-copyright">
        © 2021 spchinhhang
      </div>
    </FooterWrapper>
  );
};

export default Footer;
