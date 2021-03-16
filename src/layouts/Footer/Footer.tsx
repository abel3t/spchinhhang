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
      <h5>© 2021 - Bản quyền thuộc về spchinhhang.com</h5>
    </FooterWrapper>
  );
};

export default Footer;
