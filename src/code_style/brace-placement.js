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
 */

function sumOfDigits(number) {
  let totalSum = 0;
  while (number > 0) {
      const lastDigit = number % 10;
      totalSum += lastDigit;
      number = Math.floor(number / 10);
  }
  return totalSum;
}

const sumOfDigits = function (number)
{
  let totalSum = 0;
  while (number > 0)
  {
      const lastDigit = number % 10;
      totalSum += lastDigit;
      number = Math.floor(number / 10);
  }
  return totalSum;
};
