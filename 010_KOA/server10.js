const Koa = require('koa');
const Router = require('koa-router');
const session = require('koa-session');

const server = new Koa();
server.listen(8080);

server.keys = [
  'jdfuhynkvboxcvjkxciopvjxhasd',
  'hvbuihxcjkbvxcivjuichzxuixcc',
  'ioguhuibdaskdmuivbhmcvnoasdj'
];

// Session here need server as argument to retrieve its keys
server.use(session({
  key: 'session_ID',
  maxAge: 20*60*1000,   // Valid duration
  renew: true           // auto-renew so long there is request within the valid duration
}, server));

server.use(async ctx => {
  if(!ctx.session['view']) {
    ctx.session['view'] = 0;
  } 

  ctx.session['view']++;

  ctx.body = `Your number of visit: ${ctx.session.view}`;
});
