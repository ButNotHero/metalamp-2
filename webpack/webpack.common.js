// Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Custom
const paths = require('./utils/paths');
const { pagesHtml } = require('./utils/pages');

module.exports = {
  entry: `${paths.src}/app.ts`,
  output: {
    path: paths.build,
    filename: 'js/[name].[contenthash].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/img/[name].[contenthash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: 'static/fonts/[name].[contenthash:7].[ext]',
        },
      },
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
          to: 'static',
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
