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
 * @desc Set
 */

'use strict';

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Duplicates are ignored

console.log(mySet.size); // 2

for (const value of mySet) {
  console.log(value); // 1, 2
}