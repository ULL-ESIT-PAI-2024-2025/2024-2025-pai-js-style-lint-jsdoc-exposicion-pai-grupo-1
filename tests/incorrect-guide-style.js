const username='John'; // 1. Missing space around `=`, 2. Missing semicolon, 3. Using var, 4. Double quotes

const age=30; const city='New York'; // 5. Multiple variable declarations in the same statement, 1. Missing space around `=`

function greetUser() { // 6. Missing space before `{`
  console.log(`Hello ${username}, you are ${age} years old`); // 2. Missing semicolon, 7. No indent
}

if (age>18) console.log('Adult'); // 8. Missing spaces around `>`, 9. No curly braces `{}` in control structure, 10. No space after if

const numbers=[1, 2, 3, 4, 5]; // 11. Missing spaces after commas in the array, 1. Missing space around `=`
