const Router = require('koa-router');
const path = require('path');
const common = require('../../libs/common');

let router = new Router();

const fields = [
      {title: '标题', name: 'title', type: 'text'},
    ];

const table = 'catalog_table';
const page_type = 'catalog';
const page_types = {
  'banner': 'banner',
  'catalog': '类目管理',
  'article': '文章管理',
};

router.get('/', async ctx => {
  const {HTTP_ROOT} = ctx.config;

  let datas = await ctx.db.query(`SELECT * FROM ${table}`);
  
  await ctx.render('admin/table', {
    HTTP_ROOT,
    page_type,
    page_types,
    datas,
    fields
  });  
});

router.post('/', async ctx => {
  let {HTTP_ROOT} = ctx.config;
  let {title} = ctx.request.fields;

  await ctx.db.query(`INSERT INTO ${table} (title) VALUES (?)`, [
    title
  ]);

  ctx.redirect(`${HTTP_ROOT}/admin/${page_type}`);
});

router.get('/delete/:id', async ctx => {
  let {id} = ctx.params;
  let {UPLOAD_DIR, HTTP_ROOT} = ctx.config;

  // let data = await ctx.db.query(`SELECT * FROM ${table} WHERE ID=?`, [id]);
  // ctx.assert(data.length, 400, 'no data');

  // let row = data[0];

  // await common.unlink(path.resolve(UPLOAD_DIR, row.src));
  await ctx.db.query(`DELETE FROM ${table} WHERE ID = ?`, [id]);

  ctx.redirect(`${HTTP_ROOT}/admin/${page_type}`);
});

module.exports = router.routes();