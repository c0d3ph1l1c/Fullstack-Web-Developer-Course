const Router = require('koa-router');
const path = require('path');
const common = require('../../libs/common');

let router = new Router();

router.get('/', async ctx => {
  ctx.body = 'article';
});


module.exports = router.routes();