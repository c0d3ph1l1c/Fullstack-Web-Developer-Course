const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(8080);

server.context.a = 12;

let router = new Router();

router.get('/news/', async (ctx, next) => {
  let {id} = ctx.query;
  console.log(ctx.query);

  ctx.body = 'bbb' + ctx.a;
});

server.use(router.routes());