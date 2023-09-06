// HOW REQUIRE WORKS
/*
console.log(arguments);
console.log(require('module').wrapper);
*/

// MODULE.EXPORTS
/*
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));
*/

// EXPORTS
// const calc2 = require('./test-module-2');
// console.log(calc2.multiply(2, 5));

const { add, reduce, multiply, divide } = require('./test-module-2');
console.log(divide(8, 2));

// CACHING
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
/*
Executed 1 -> calls 3
Hello from the module
Log this beatiful text
Log this beatiful text
Log this beatiful text
 */
