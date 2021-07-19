const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

const paths = require('./utils/paths');

module.exports = merge(webpackCommon, {
  // Set development mode
  mode: 'development',

  // Generate source maps
  devtool: 'inline-source-map',

  // Run dev server
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: paths.build,
    watchContentBase: true,
    open: false,
    overlay: true,
    compress: true,
    hot: true,
    port: 3000,
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 300,
    ignored: /node_modules/,
  },

  plugins: [
    // Only update wha has changed on hot reload
    new HotModuleReplacementPlugin(),
  ],
});
