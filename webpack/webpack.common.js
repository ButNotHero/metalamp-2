// Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Custom
const paths = require('./utils/paths');
const { pagesHtml } = require('./utils/pages');

module.exports = {
  entry: `${paths.src}/app.ts`,
  output: {
    path: paths.build,
    filename: 'js/[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': paths.src,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/resource' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
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
    ...pagesHtml,
  ],
};
