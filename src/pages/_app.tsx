import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { StickyProvider } from 'contexts/app/app.provider';
import { SearchProvider } from 'contexts/search/search.provider';

import AppLayout from 'layouts/AppLayout';

// External CSS import here
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import '@redq/reuse-modal/lib/index.css';
import { GlobalStyle } from 'styled/global.style';
import { useMedia } from '../utils/useMedia';

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
      <SearchProvider query={query}>
        <StickyProvider>
          <>
            <AppLayout deviceType={{ mobile, tablet, desktop }}>
              <Component {...pageProps} deviceType={{ mobile, tablet, desktop }}/>
            </AppLayout>
            <GlobalStyle/>
          </>
        </StickyProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { ...appProps, userAgent, query };
};
