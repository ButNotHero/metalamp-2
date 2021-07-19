const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
const pagesDir = `${paths.src}/pug/pages/`;
const pages = fs.readdirSync(pagesDir).filter((fileName) => fileName.endsWith('.pug'));
const pagesHtml = pages.map(
  (page) =>
    new HtmlWebpackPlugin({
      minify: process.env.NODE_ENV === 'production',
      template: `${pagesDir}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
      inject: true,
    }),
);

module.exports = {
  pagesHtml,
};
