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

function processUserData(user) {
  // Validate input
  if (!user.name || !user.email) {
      throw new Error('Invalid user data');
  }

  // Process user data
  const formattedName = user.name.trim().toUpperCase();
  const emailDomain = user.email.split('@')[1];

  // Log the result
  console.log(`User ${formattedName} uses email from ${emailDomain}`);

  // Additional processing could go here…
}

function validateUserData(user) {
  if (!user.name || !user.email) {
      throw new Error('Invalid user data');
  }
}

function formatUserName(name) {
  return name.trim().toUpperCase();
}

function getEmailDomain(email) {
  return email.split('@')[1];
}

function logUserInfo(name, domain) {
  console.log(`User ${name} uses email from ${domain}`);
}

function processUserData(user) {
  validateUserData(user);
  const formattedName = formatUserName(user.name);
  const domain = getEmailDomain(user.email);
  logUserInfo(formattedName, domain);
}
