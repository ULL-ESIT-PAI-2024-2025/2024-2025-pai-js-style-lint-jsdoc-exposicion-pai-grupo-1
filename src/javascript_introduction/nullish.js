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
 * @desc Nullish Operator
 */

'use strict';

result = firstValue ?? secondValue;
result = (firstValue !== null && firstValue !== undefined) ? firstValue : secondValue;

let firstName;
let lastName;
let nickName = 'Supercoder';

/** Shows the first defined value: */
console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder