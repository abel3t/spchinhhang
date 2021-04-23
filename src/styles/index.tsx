import { createMuiTheme } from '@material-ui/core/styles';
import * as React from 'react';
import Responsive from 'react-responsive';
import { css } from 'styled-components';

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#FFF'
    },
    primary: {
      main: '#387FFF'
    },
    secondary: {
      main: '#FFF'
    }
  }
});

export const Desktop = (props: any) => <Responsive {...props} minWidth={992}/>;
export const Tablet = (props: any) => (
  <Responsive {...props} minWidth={768} maxWidth={991}/>
);
export const Mobile = (props: any) => <Responsive {...props} maxWidth={767}/>;
export const Default = (props: any) => <Responsive {...props} minWidth={768}/>;

export const mediaQuerySizes: { [s: string]: number } = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 500
};

interface MediaTypes {
  [key: string]: any;

  giant: (tString: TemplateStringsArray) => TemplateStringsArray;
  desktop: (tString: TemplateStringsArray) => TemplateStringsArray;
  tablet: (tString: TemplateStringsArray) => TemplateStringsArray;
  phone: (tString: TemplateStringsArray) => TemplateStringsArray;
}

export const media: MediaTypes = Object.keys(mediaQuerySizes).reduce<MediaTypes>(
  (accumulator, label) => {
    const emSize = mediaQuerySizes[label] / 16;
    accumulator[label] = (...args: any) => css`
      @media (max-width: ${emSize}em) {
        ${css({ ...args })};
      }
    `;
    return accumulator;
  },
  {
    giant: (str: TemplateStringsArray) => str,
    desktop: (str: TemplateStringsArray) => str,
    tablet: (str: TemplateStringsArray) => str,
    phone: (str: TemplateStringsArray) => str
  }
);
