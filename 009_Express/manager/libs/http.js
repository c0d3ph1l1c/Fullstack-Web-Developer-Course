const http = require('http');
const url = require('url');
const querystring = require('querystring');
const zlib = require('zlib');
const fs = require('fs');
const router = require('./router');
const {Form} = require('multiparty');
const {HTTP_PORT, HTTP_ROOT, HTTP_UPLOAD} = require('../config');

http.createServer((req, res) => {
  res.writeJson = function(json) {
    res.setHeader('content-type', 'application/json');
    res.write(JSON.stringify(json));
  }

  // 1. Parse request - GET, POST, FILE
  let {pathname, query} = url.parse(req.url, true);

  if(req.method == 'POST') {
    if(req.headers['content-type'].startsWith('application/x-www-form-urlencoded')) {
      // Normal Post
      let arr = [];
      req.on('data', buffer => {
        arr.push(buffer);
      });
      req.on('end', () => {
        let post = querystring(Buffer.concat(arr).toString());

        // 2. Find router
        handle(req.method, pathname, query, post, {});
      })
    } else {
      // File Post
      let form = new Form({
        uploadDir: HTTP_UPLOAD
      });

      form.parse(req);

      let post = {};
      let files = {};

      form.on('field', (name, value) => {
        post[name] = value;
      });

      form.on('file', (name, file) => {
        files[name] = file;
      });

      form.on('error', err => {
        console.log(err);
      });

      form.on('close', () => {
        // 2. Find router
        handle(req.method, pathname, query, post, files);
      });
    }
  } else {
    // 2. Find router
    handle(req.method, pathname, query, {}, {});
  }

  // 2. Find router
  async function handle(method, url, get, post, files) {
    let fn = router.findRouter(method, url);

    if(!fn) {
      // File Request
      let filepath = HTTP_ROOT + pathname;
      fs.stat(filepath, (err, stat) => {
        if(err) {
          res.writeHeader(404);
          res.write('Not Found');
          res.end();
        } else {
          let rs = fs.createReadStream(filepath);
          let gz = zlib.createGzip();

          rs.on('error', () => {});

          res.setHeader('content-encoding', 'gzip');
          rs.pipe(gz).pipe(res);
        }
      });
    } else {
      // Route
      try {
        await fn(res, get, post, files);
      } catch(e) {
        res.writeHeader(500);
        res.write('Internal Server Error');
        res.end();
      }
    }
  }
}).listen(HTTP_PORT);
console.log(`server started at ${HTTP_PORT}`);