const ejs = require('ejs');

// ejs.renderFile('./template/1.ejs', {
//   name: 'blue',
//   arr: [123, 54, 64]
// }, (err, data) => {
//   if(err) {
//     console.log('Error: ', err);
//   } else {
//     console.log(data);
//   }
// });

ejs.renderFile('./template/2.ejs', {
  name: 'blue',
  arr: [123, 54, 64]
}, (err, data) => {
  if(err) {
    console.log('Error: ', err);
  } else {
    console.log(data);
  }
});