const fs = require('fs');

// fs.writeFile(path, data, callback)
// fs.readFile(path, callback)

// Write
// fs.writeFile('./a.txt', 'asdfasdfad', err => {
//   if(err) {
//     console.log('Write Error:', err);
//   } else {
//     console.log('Write Successful!');
//   }
// });

fs.readFile('./a.txt', function(err, data) {
  if(err) {
    console.log('Read Error: ', err);
  } else {
    console.log('Read Successful: ', data.toString());
  }
});