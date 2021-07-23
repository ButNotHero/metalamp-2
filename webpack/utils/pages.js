const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = require('./paths');

const PAGES = require('../../src/pug/pages');

const PAGES_HTML = PAGES.map(
  (page) =>
    new HtmlWebpackPlugin({
      minify: process.env.NODE_ENV === 'production',
      template: `${PATHS.src}/pug/pages/${page}/${page}.pug`,
      filename: `${page}.html`,
      chunks: ['common', page],
      inject: 'body',
    }),
);

module.exports = {
  PAGES,
  PAGES_HTML,
};
