const http = require('http');
const util = require('./buffer_util.js');
const fs = require('fs');

http.createServer((req, res) => {
  let boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1];

  // arr here is only for demo (not practical for big file size)
  let arr = [];     

  req.on('data', buffer => {
    arr.push(buffer);
  });
  req.on('end', () => {
    let buffer = Buffer.concat(arr);

    // 1. Split by boundary
    let result = util.bufferSplit(buffer, boundary);

    result.pop();
    result.shift();

    // 2. Process each content
    result.forEach(buffer => {
      buffer = buffer.slice(2, buffer.length-2);

      let n = buffer.indexOf('\r\n\r\n');

      let info = buffer.slice(0, n).toString();
      let data = buffer.slice(n + 4);

      if(info.indexOf('\r\n') != -1) {
        // File 
        let result2 = info.split('\r\n')[0].split('; ');
        let name = result2[1].split('=')[1];
        let filename = result2[2].split('=')[1];

        name = name.substring(1, name.length-1);
        filename = filename.substring(1, filename.length-1);

        fs.writeFile(`upload/${filename}`, data, err => {
          if(err) {
            console.log(err);
          } else {
            console.log('Upload Success!');
          }
        });
      } else {
        // Typical message
        let name = info.split('; ')[1].split('=')[1];
        name = name.substring(1, name.length-1);

        // console.log(name);
      }

      // console.log(data.toString());
    });
  });
}).listen(8080);