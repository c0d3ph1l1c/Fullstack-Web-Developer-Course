const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(8080);

server.keys = [
  'asdasdasghdjhd',
  'fughuihcxnbvxc',
  'aiusghbsdjkfnk'
];
server.use(async ctx => {
  // ctx.cookies.set('user', 'blue', {
  //   maxAge: 14*86400*1000,
  //   signed: true
  // });

  console.log(ctx.cookies.get('user', {signed: true}));
});