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
 * @desc Types of functions
 */

'use strict';

/** Function Expression */
const sayHi = function() {
  console.log('Good morning, PAI!');
}

/** Arrow Function */
const calculateSum = (firstAddend, secondAddend) => firstAddend + secondAddend;
console.log(calculateSum(1, 2)); // 3