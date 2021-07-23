// Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Custom
const LOADERS = require('./utils/loaders');

const PATHS = require('./utils/paths');
const { PAGES, PAGES_HTML } = require('./utils/pages');

module.exports = {
  entry: (() => {
    const entries = {};
    PAGES.forEach((page) => (entries[page] = `${PATHS.pages}/${page}/${page}.ts`));
    return entries;
  })(),

  output: {
    path: PATHS.build,
    filename: 'js/[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': PATHS.src,
    },
  },

  module: {
    rules: LOADERS,
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: PATHS.static,
          to: '',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/*.DS_Store', '**/*.gitkeep'],
          },
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css',
    }),

    ...PAGES_HTML,
  ],
};
