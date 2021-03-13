const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');

// next.js configuration

module.exports = withPlugins([ withOptimizedImages, withFonts, withCSS, withSASS ], {
  cssModules: false,
  env: {
    STRIPE_PUBLIC_KEY: 'your_stripe_public_key_here',
    API_URL: 'https://spchinhhang-api.quynguyenwork.vercel.app/shop/graphql'
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias
    };

    config.module.rules.push(
      {
        test: /\.(woff|ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:8].[ext]',
              publicPath: (url) => {
                return `/_next/static/css/${url}`;
              },
              outputPath: `${isServer ? '../' : ''}static/css/`,
              esModule: false
            }
          }
        ]
      }
    );
    return config;
  }
});
