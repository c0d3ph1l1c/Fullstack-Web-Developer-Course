const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(8080);

let router = new Router();

// router.get('/login', async (ctx, next) => {
//   if(!ctx.query.user || !ctx.query.pass) {
//     ctx.throw(400, 'user and password are required');
//   } else {
//     ctx.body = 'success';
//   }
// });

router.get('/login', async ctx => {
  /*  
  ctx.assert(ctx.query.user, 400, 'username is required');
  ctx.assert(ctx.query.pass, 400, 'password is required'); 
  ctx.body = 'success'; 
  */

  if(ctx.query.user && ctx.query.pass) {
    ctx.body = 'success';
  }
});

server.use(router.routes());