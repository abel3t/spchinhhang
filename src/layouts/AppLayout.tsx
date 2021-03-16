import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { HOME_PAGE } from 'constants/navigation';

const MobileHeader = dynamic(() => import('./Header/MobileHeader'), {
  ssr: false
});
const LayoutWrapper = styled.div`
  .reuseModalHolder {
    padding: 0;
    overflow: auto;
    border-radius: 10px;
    border: 0;
  }
`;

const HeaderWrapper = styled.div`
  display: block;
  min-height: 70px;
`;

type LayoutProps = {
  className?: string
  deviceType: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
  token?: string
}

const Layout: FunctionComponent<LayoutProps> = ({
  className,
  children,
  deviceType: { mobile, tablet, desktop },
  token
}) => {
  const isSticky = true;
  const { pathname } = useRouter();

  const isHomePage = pathname === HOME_PAGE;
  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <HeaderWrapper>
        {(mobile || tablet) && (
          <MobileHeader
            className={`${isSticky ? 'sticky' : 'unSticky'} ${
              isHomePage ? 'home' : ''
            }`}
            pathname={pathname}
            deviceType={{ mobile, tablet, desktop }}
          />
        )}

        <Header token="" pathname="" deviceType={{ mobile, tablet, desktop }}/>
      </HeaderWrapper>
      {children}
      <Footer deviceType={{ mobile, tablet, desktop }}/>
    </LayoutWrapper>
  );
};

export default Layout;
