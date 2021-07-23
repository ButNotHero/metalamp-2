const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BABEL_LOADER = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
  },
};

const IMG_LOADER = 'asset/resource';

const FONTS_LOADER = 'asset/resource';

const MINI_CSS_EXTRACT_PLUGIN = {
  loader: MiniCssExtractPlugin.loader,
  options: {},
};

const CSS_LOADER = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    importLoaders: 1,
  },
};

const POST_CSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  },
};

const SASS_LOADER = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
};

const PUG_LOADER = {
  loader: 'pug-loader',
  options: {
    pretty: true,
  },
};

const LOADERS = [
  {
    test: /\.pug$/,
    use: [PUG_LOADER],
  },
  {
    test: /\.(js|jsx|tsx|ts)$/,
    use: [BABEL_LOADER],
  },
  {
    test: /\.css$/,
    use: [MINI_CSS_EXTRACT_PLUGIN, CSS_LOADER, POST_CSS_LOADER],
  },
  {
    test: /\.s[ac]ss$/,
    use: [MINI_CSS_EXTRACT_PLUGIN, CSS_LOADER, POST_CSS_LOADER, SASS_LOADER],
  },
  {
    test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
    type: IMG_LOADER,
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: FONTS_LOADER,
  },
];

module.exports = LOADERS;
