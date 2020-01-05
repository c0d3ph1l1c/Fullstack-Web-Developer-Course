const path = require('path');

module.exports = {
  // database
  DB_HOST: 'localhost',
  DB_PORT: 3308,
  DB_USER: 'root',
  DB_PASS: '',
  DB_NAME: '20200102',

  // http
  HTTP_PORT: 8080,
  HTTP_ROOT: path.resolve(__dirname, '../static/'),
  HTTP_UPLOAD: path.resolve(__dirname, '../static/upload/'),
};