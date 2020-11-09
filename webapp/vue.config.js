const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'api': resolve('src/api'),
        'base': resolve('src/base'),
        'common': resolve('src/common'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    }
  }
}
