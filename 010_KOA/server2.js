const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(8080);

let router = new Router();

// Params
/* router.get('/news/:id', async ctx => {
  let {id} = ctx.params;

  ctx.body = 'News' + id;
});

router.get('/news/:id/:id2/:id3', async ctx => {
  let {id, id2, id3} = ctx.params;

  ctx.body = `News${id}_${id2}_${id3}`;
}); */

// The first route callback kicks in. Use next() to pass to the next callback
router.get('/news/:id', async (ctx, next) => {
  let {id} = ctx.params;

  ctx.body = 'bbb';

  await next();
});

router.get('/news/1', async ctx => {
  let {id} = ctx.params;

  ctx.body += 'aaa';
});

server.use(router.routes());