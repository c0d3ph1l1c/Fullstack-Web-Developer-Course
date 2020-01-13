const Router = require('koa-router');

let router = new Router();

router.get('', async ctx => {
  let {HTTP_ROOT} = ctx.config;
  let banners = await ctx.db.query('SELECT * FROM banner_table ORDER BY serial ASC');
  let catalogs = await ctx.db.query('SELECT * FROM catalog_table');
  let articles = await ctx.db.query('SELECT * FROM article_table ORDER BY created_time DESC LIMIT 10');

  articles.forEach(article => {
    let oDate = new Date(article.created_time*1000);
    article.created_time=`${oDate.getFullYear()}-${oDate.getMonth()+1}-${oDate.getDate()}`;
  });

  await ctx.render('www/index', {
    HTTP_ROOT,
    banners,
    catalogs,
    articles
  });
});

router.get('list/:id', async ctx => {
  let {HTTP_ROOT} = ctx.config;

  await ctx.render('www/list', {
    HTTP_ROOT,
  });
});

module.exports = router.routes();