const db = require('./libs/database');
const http = require('./libs/http');
const routers = require('./routers');

const process = require('process');

// Can be used to decide which config setting to apply
console.log(process.argv);