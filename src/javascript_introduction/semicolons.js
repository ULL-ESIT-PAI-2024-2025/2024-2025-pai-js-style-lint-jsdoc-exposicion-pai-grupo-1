'use strict';

console.log('Hello');
console.log('World');

console.log('Hello')
console.log('World')

/** It executes correctly */
console.log('Hello');
[1, 2].forEach(console.log);

/** Doesn't give what we're expecting */
console.log('Hello')
[1, 2].forEach(console.log);