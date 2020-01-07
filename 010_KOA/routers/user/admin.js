const Router = require('koa-router');

let router = new Router();

router.get('/a', async ctx => {
  ctx.body = 'Admin\'s a';
});

module.exports = router.routes();