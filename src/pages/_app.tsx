import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import AppLayout from 'layouts/AppLayout';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useMedia } from '../utils/useMedia';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <CssBaseline/>
      <AppLayout deviceType={{ mobile, tablet, desktop }}>
        <Component {...pageProps} deviceType={{ mobile, tablet, desktop }}/>
      </AppLayout>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { ...appProps, userAgent, query };
};
