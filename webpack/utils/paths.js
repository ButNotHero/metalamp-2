const path = require('path');

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../../src'),

  // Production files
  build: path.resolve(__dirname, '../../dist'),

  // Static files
  static: path.resolve(__dirname, '../../src/static'),

  // Pages directory
  pages: path.resolve(__dirname, '../../src/pug/pages'),
};
