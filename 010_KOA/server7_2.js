const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const server = new Koa();
server.listen(8080);

let router = new Router();

router.get('/user', async ctx => {
 
});

server.use(router.routes());

let staticRouter = new Router();
staticRouter.all(/(\.jpg|\.png|\.gif)$/i, static('./static', {
  maxage: 60*86400*1000  // 60 days
}));
staticRouter.all(/(\.css)$/i, static('./static', {
  maxage: 1*86400*1000  // 1 day
}));
staticRouter.all(/(\.html|\.htm|\.shtm)$/i, static('./static', {
  maxage: 2*86400*1000  // 2 days
}));
// Other file types
staticRouter.all('', static('./ static', {
  maxage: 30*86400*1000  // 30 days
}));

server.use(staticRouter.routes());