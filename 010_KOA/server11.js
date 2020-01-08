const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(8080);

// To allow db to be used in other modules
server.context.db = require('./libs/database');

// Take advantage of async/await to simplify error handling 
server.use(async (ctx, next) => {
  try{
    await next();
  } catch(e) {
    console.log('bbbb');
    ctx.body = 'Error!'; 
  }
});

// server.use(async ctx => {
//     let data = await ctx.db.query('SELECT * FROM item_table');
//     ctx.body = data;
// });


// Take advantage of async/await to simplify router error handling and general business logic
// '*' - all pathname
// '' - root
let router = new Router();
router.all('*', async (ctx, next) => {
  // koa-session is not imported in this case, just for demonstration
  if(ctx.session['admin_id']) {
    try {
      await next();
    } catch(e) {
      console.log('aaaa');
      ctx.body = 'Router Error!';
    }
  } else {
    ctx.body = 'You are not administrator!';
  }
});

router.get('/a', async ctx => {
  ctx.body = div.title;
});

server.use(router.routes());