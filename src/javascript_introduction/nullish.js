'use strict';

result = firstValue ?? secondValue;
result = (firstValue !== null && firstValue !== undefined) ? firstValue : secondValue;

let firstName;
let lastName;
let nickName = 'Supercoder';

/** Shows the first defined value: */
console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder