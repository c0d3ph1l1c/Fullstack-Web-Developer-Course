const Koa = require('koa');
const Router = require('koa-router');
const body = require('koa-better-body');

const server = new Koa();
server.listen(8080);

server.use(body({
  uploadDir: './static/upload'
}));

server.use(async ctx => {
  // File and POST data
  console.log(ctx.request.fields);

  ctx.body = 'aaa';
});