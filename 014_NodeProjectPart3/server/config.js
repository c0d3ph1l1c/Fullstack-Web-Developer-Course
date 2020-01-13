const path = require('path');

module.exports = {
  DB_HOST: 'localhost',
  DB_PORT: 3308,
  DB_USER: 'root',
  DB_PASS: '',
  DB_NAME: 'cpts',

  PORT: 8080,

  ADMIN_PREFIX: '_?:<>SKUDHBCV[]RT{}SDFNJN &%',

  HTTP_ROOT: 'http://localhost:8080',
  // HTTP_ROOT: 'https://www.aaa.com',

  UPLOAD_DIR: path.resolve(__dirname, './static/upload')
};