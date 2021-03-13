import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { CartProvider } from 'contexts/cart/cart.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { StickyProvider } from 'contexts/app/app.provider';
import { SearchProvider } from 'contexts/search/search.provider';
import LanguageProvider from 'contexts/language/language.provider';
import CurrencyProvider from 'contexts/currency/currency.provider';

import AppLayout from 'containers/LayoutContainer/AppLayout';
import { useDeviceType } from 'helper/useDeviceType';

// Language translation files
import localEn from 'data/translation/en.json';
import localVi from 'data/translation/vi.json';

// External CSS import here
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import '@redq/reuse-modal/lib/index.css';
import { GlobalStyle } from 'styled/global.style';
import { useMedia } from '../utils/useMedia';

const messages = {
  vi: localVi,
  en: localEn
};

export default function ExtendedApp({
  Component,
  pageProps,
  query,
  userAgent
}) {
  const mobile = useMedia('(max-width: 580px)');
  const tablet = useMedia('(max-width: 991px)');
  const desktop = useMedia('(min-width: 992px)');
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider messages={messages}>
        <CurrencyProvider>
          <CartProvider>
            <SearchProvider query={query}>
              <StickyProvider>
                <AuthProvider>
                  <>
                    <AppLayout deviceType={{ mobile, tablet, desktop }}>
                      <Component {...pageProps} deviceType={{ mobile, tablet, desktop }}/>
                    </AppLayout>
                    <GlobalStyle/>
                  </>
                </AuthProvider>
              </StickyProvider>
            </SearchProvider>
          </CartProvider>
        </CurrencyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { ...appProps, userAgent, query };
};
