const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const fs = require('fs');

const server = new Koa();
server.listen(8080);

let router = new Router();

router.get('/login', async ctx => {
  // State
  // ctx.state = 404;

  // Redirect
  // ctx.redirect('/news');
  ctx.redirect('https://cn.bing.com');
});

router.get('/user', async ctx => {
  ctx.body = fs.createReadStream('./server.js');
  // Equivalent to ctx.set('Content-disposition', 'attachment; filename=hello.txt')
  ctx.attachment('server.js');
});

server.use(router.routes());