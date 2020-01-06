const {addRouter} = require('../libs/router');

addRouter('get', '/list', require('./list'));
addRouter('post', '/add', require('./add'));
// Del as exercise
addRouter('get', '/del', require('./del'));