const path = require('path');

const ROOT = process.cwd();

const SOURCE_DIR_NAME = 'src';
const BUILD_DIR_NAME = 'dist';

module.exports = {
  // Source files
  src: path.join(ROOT, SOURCE_DIR_NAME),

  // Build files
  build: path.join(ROOT, BUILD_DIR_NAME),

  // Static files (file in this folder always copy in build directory)
  static: path.join(ROOT, `${SOURCE_DIR_NAME}/static`),

  // Site pages directory
  pages: path.join(ROOT, `${SOURCE_DIR_NAME}/pug/pages`),
};
