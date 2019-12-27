// import module
/*
import * as mod1 from './mod1';

console.log(mod1);

alert(mod1.sum(mod1.a, mod1.b));

let p = new mod1.Person('blue', 18);
p.show();
*/

/*
import {a, b, c} from './mod1';

console.log(a, b, c);
*/

// import default member
import s from './mod1';

alert(s);

// async import 
// - for non-essential items like ads etc 
// - can only import the whole module (performance penalty)
// - cannot pick which members to import
//
// import('./mod2').then(mod2 => {
//   alert('mod2.qq: ' + mod2.qq);
// }, err=> {
//   alert('mod2 Loading Fail!');
// })
