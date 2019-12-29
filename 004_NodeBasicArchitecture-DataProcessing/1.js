// 1. Relative/absolute file path
// 2. Otherwise, search file in local node_modules or global node_modules folder
const mod1 = require('./mod1');

/*
console.log(mod1.a);
console.log(mod1.b);
console.log(mod1.c);
*/

/* 
mod1();
 */

let p = new mod1(99);

p.show();