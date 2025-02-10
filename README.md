## JavaScript + Coding Style + JSDoc + ESLint 

### Index

- [JavaScript Introduction](#introduction)
- [Code Style](#code-style)
- [Google Style Guide](#google-style-guide)
- [JSDoc](#jsdoc)
- [ESLint](#eslint)

---

### Introduction

This repository contains materials related to best practices in JavaScript, including code style, documentation with JSDoc, and static analysis with ESLint. Additionally, it covers essential concepts such as the `package.json` file, the structure and purpose of README files, and fundamental JavaScript topics like operators and variables.

---

### Repository Structure


      .
      ├── bib          # Presentation bibliography and references
      ├── slides       # slides of your presentation (PDF is the preferred format)
      ├── tests        # Source code for tests (if applicable)
      ├── src          # Source code (add subdirectories if necessary) 


---

### Code Style

JavaScript code should follow a consistent style to improve readability and maintainability. It is recommended to use the [Google Style Guide](#google-style-guide) and tools like ESLint to automatically check compliance with established rules.

---

### Google Style Guide

The [Google Style Guide](https://google.github.io/styleguide/jsguide.html) provides a set of rules and recommendations for writing clear and well-structured JavaScript code. Key rules include:

- Use `const` and `let` instead of `var`.
- Indentation with 2 spaces.
- Use camelCase for variable and function names.
- Document functions and classes with JSDoc.

---

### JSDoc

[JSDoc](https://jsdoc.app/) is a documentation format for JavaScript that allows describing functions, parameters, and return types in code comments. Example:

```js
/**
 * Adds two numbers.
 * @param {number} numer1 - First number.
 * @param {number} number2 - Second number.
 * @returns {number} Sum of the numbers.
 */
function add(number1, number2) {
  return number1 + number2;
}
```
### ESlint

[ESLint](https://lenguajejs.com/javascript/calidad-de-codigo/eslint/) es una herramienta de análisis estático que ayuda a detectar y corregir problemas en el código JavaScript.