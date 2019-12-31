const http = require('http');
const multiparty = require('multiparty');

http.createServer((req, res) => {
  if(req.url == '/upload' && req.method == 'POST') {

    let form = new multiparty.Form({
      uploadDir: './upload'
    });

    form.parse(req);

    form.on('field', (name, value) => {
      console.log('Form data: ', name, value);
    });
    form.on('file', (name, file) => {
      console.log('File: ', name, file);
    });

    form.on('close', () => {
      console.log('Form Parsing Completed!');
      res.write('Upload successful!');
      res.end();
    });
  }

}).listen(8080);
