import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { HOME_PAGE } from 'constants/navigation';
import { Container } from 'components/container/Container.style';

const MobileHeader = dynamic(() => import('./Header/MobileHeader'), {
  ssr: false
});

const LayoutWrapper = styled.div`
  background-color: #F4F4F4;
  margin-top: 0;
  padding-left: 15px;
  padding-right: 15px;
`;

const ContentWrapper = styled.main`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
`;

const HeaderWrapper = styled.div`
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
            pathname={pathname}
            deviceType={{ mobile, tablet, desktop }}
          />
        )}

        <Header token="" pathname="" deviceType={{ mobile, tablet, desktop }}/>
      </HeaderWrapper>

      <ContentWrapper>
        <Container>
          {children}
        </Container>
      </ContentWrapper>
      <Footer deviceType={{ mobile, tablet, desktop }}/>
    </LayoutWrapper>
  );
};

export default Layout;
