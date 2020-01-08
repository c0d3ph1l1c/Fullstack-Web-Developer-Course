const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(8080);

let router = new Router();

// urlencoded 
// - flexible data sequence (?a=12&b=5 or ?b=5&a=12)
// - data can be ommitted (?a=12)
// - cannot be optimized for SEO

// params 
// - rigid data sequence (/12/5)
// - data cannot be ommitted (/12/5)
// - can be optimized for SEO

router.get('/news/', async (ctx, next) => {
  let {id} = ctx.query;
  console.log(ctx.query);

  ctx.body = 'bbb';
});

server.use(router.routes());