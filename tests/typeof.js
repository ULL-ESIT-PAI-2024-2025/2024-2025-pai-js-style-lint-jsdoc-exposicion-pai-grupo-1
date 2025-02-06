'use strict';

function main() {
  /** 
   * Aunque `null` no es un objeto, JavaScript devuelve "object" 
   * por una peculiaridad histórica.
   */
  console.log(typeof null); // "object" 😲

  /** 
   * Aunque `NaN` significa "Not a Number", sigue considerándose de tipo "number".
   */
  console.log(typeof NaN); // "number" 🤯

  /** 
   * En JavaScript, las funciones son objetos, pero typeof las clasifica como "function".
   */
  console.log(typeof function() {}); // "function" 🧐

  /** 
   * Un array es un objeto especial en JavaScript, no un tipo separado.
   */
  console.log(typeof []); // "object" 😵

  /** 
   * Las instancias de `String`, `Number` o `Boolean` creadas con `new` son objetos, 
   * no valores primitivos.
   */
  console.log(typeof new String("hola")); // "object" 🤔

  /** 
   * El operador `,` evalúa múltiples expresiones y devuelve la última, 
   * en este caso "boolean" por `true`.
   */
  console.log(typeof (1, "hello", true)); // "boolean" 🧐

  /** 
   * Si intentas usar una variable no declarada, `typeof` no lanza error, 
   * sino que devuelve "undefined".
   */
  console.log(typeof someUndefinedVar); // "undefined" 🔍

  /** 
   * Las arrow functions también son de tipo "function", igual que las funciones normales.
   */
  console.log(typeof (() => {})); // "function" 😲

  /** 
   * Los `Symbol` son un tipo primitivo único en JavaScript, distinto de `string`, `number`, etc.
   */
  console.log(typeof Symbol("foo")); // "symbol" ✨
}

if(require.main() === module) {
  main();
}