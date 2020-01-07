const Router = require('koa-router');

let router = new Router();

router.get('/', async ctx => {
  ctx.body = 'User';
});
router.use('/company', require('./company'));
router.use('/admin', require('./admin'));

module.exports = router.routes();