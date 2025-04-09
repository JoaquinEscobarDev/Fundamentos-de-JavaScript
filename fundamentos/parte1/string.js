//Tipo de Dato: STRING

let string1 = 'Hola Mundo'; // Comilla simple para cadenas simples
let string2 = "Hola Mundo2"; // Comilla doble para cadenas que pueden contener comillas simples
let string3 = `${string1} ${string2} hola Mundo: `; // Template string para interpolación de variables
let string4 = 'Hola Mundo: ' + string1 + ' ' + string2; // Concatenación de strings

// console.log(string1);
// console.log(string2);
// console.log(string3);
// console.log(string4);


const phrase = 'JavaScript es un lenguaje de programación';

// 1. Operaciones básicas de cadena
console.log('Longitud:', phrase.length);
console.log('Mayúsculas:', phrase.toUpperCase());
console.log('Minúsculas:', phrase.toLowerCase());

// 2. Búsqueda en cadenas
console.log('Posición de "lenguaje":', phrase.indexOf('lenguaje'));
console.log('¿Contiene "lenguaje"?', phrase.includes('lenguaje'));

// 3. Extracción de subcadenas
const firstTenChars = phrase.substring(0, 10);
console.log('Primeros 10 caracteres:', firstTenChars);
console.log('Últimos 10 caracteres:', phrase.slice(-10));

// 4. Manipulación de cadenas
const wordsArray = phrase.split(' ');
console.log('Array de palabras:', wordsArray);
console.log('Reemplazar JavaScript:', phrase.replace('JavaScript', 'Python'));

// 5. Limpieza y formato
const trimmedPhrase = phrase.trim();
console.log('Frase sin espacios:', trimmedPhrase); //elimina espacios antes y después de la cadena
console.log('Longitud sin espacios:', trimmedPhrase.length);
console.log('Primer carácter:', phrase.charAt(0));

// 6. Operaciones avanzadas (refactorizadas por pasos)
const processedPhrase = processPhrase(phrase);
console.log('Frase procesada:', processedPhrase);

// Función dedicada para el procesamiento complejo
function processPhrase(originalPhrase) {
  // Paso 1: Eliminar espacios y convertir a minúsculas
  const noSpaces = originalPhrase.replace(/\s/g, '').toLowerCase();
  
  // Paso 2: Reemplazar todas las 'a' por 'A'
  const replacedAs = noSpaces.replace(/a/g, 'A');
  
  // Paso 3: Tomar los primeros 10 caracteres y repetir 3 veces
  const repeated = replacedAs.substring(0, 10).repeat(3);
  
  // Paso 4: Eliminar todas las 'A'
  return repeated.split('A').join('');
}

// 7. Funciones adicionales para operaciones comunes
function getPaddedPhrase(phrase, targetLength, padChar = '-') {
  return phrase.padEnd(targetLength, padChar);
}

function getPhraseLengthWithoutSpaces(phrase) {
  return phrase.replace(/\s/g, '').length;
}

// Uso de funciones auxiliares
console.log('Frase rellenada:', getPaddedPhrase(phrase, 50));
console.log('Longitud sin espacios:', getPhraseLengthWithoutSpaces(phrase));