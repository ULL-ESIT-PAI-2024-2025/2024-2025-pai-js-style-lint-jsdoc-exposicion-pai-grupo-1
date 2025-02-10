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
 * @desc Essential array methods
 */

'use strict';

const sentence = ['I', 'study', 'JavaScript'];
sentence.splice(1, 1, 'love'); // Removes 'study', inserts 'love'
console.log(sentence); // ['I', 'love', 'JavaScript']

const names = ['Bilbo', 'Gandalf', 'Nazgul'];
const nameLengths = names.map((name) => name.length);
console.log(nameLengths); // [5, 7, 6]

const numbers = [1, 2, 5];
numbers.splice(-1, 0, 3, 4); // Inserts 3 and 4 before the last element
console.log(numbers); // [1, 2, 3, 4, 5]

const sum = [1, 2, 3, 4, 5].reduce((total, num) => total + num, 0);
console.log(sum); // 15