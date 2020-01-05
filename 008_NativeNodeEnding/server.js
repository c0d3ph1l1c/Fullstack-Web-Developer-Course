const http = require('http');
const zlib = require('zlib');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  let {pathname} = url.parse(req.url, true);
  let filepath = 'www' + pathname;

  fs.stat(filepath, (err, stat) => {
    if(err) {
      // deflate - uncompressed file buffer (res.write(Buffer.from('not found')))
      // res.setHeader('content-encoding', 'deflate');

      // Don't need to set content-encoding for text
      res.writeHeader(404);
      res.write('not found');
      res.end();
    } else {
      let rs = fs.createReadStream(filepath);
      rs.on('error', err => {
        // In case of read error during reading (hard drive failure, etc)
      });
      // Inform client about content encoding
      res.setHeader('content-encoding', 'gzip');
      let gz = zlib.createGzip();
      rs.pipe(gz).pipe(res);
    }
  })
}).listen(8080);