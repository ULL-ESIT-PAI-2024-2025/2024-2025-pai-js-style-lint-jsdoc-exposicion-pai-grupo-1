/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Carolina Acosta Acosta
 * @author Paulo Padilla Domingues
 * @author Laura Ramallo Pérez
 * @since Feb 09 2025
 * @desc Conversions
 */

'use strict';

/** Numeric conversions */
console.log(Number('123')); // 123
console.log(Number('123z')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

/** Boolean conversions */
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('hello')); // true
console.log(Boolean('')); // false
console.log(Boolean('0')); // true
console.log(Boolean(' ')); // spaces, also true