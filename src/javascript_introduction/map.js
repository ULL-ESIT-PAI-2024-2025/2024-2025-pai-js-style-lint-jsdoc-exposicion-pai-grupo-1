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
 * @desc Map
 */

'use strict';

const myMap = new Map();
myMap.set('first key', 1)
    .set(1, 'one')
    .set(true, 'bool');

console.log(myMap.get(1)); // 'one'
console.log(myMap.get('first key')); // 1
console.log(myMap.size); // 3