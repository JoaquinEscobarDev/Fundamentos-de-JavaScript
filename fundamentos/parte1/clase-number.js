// 1. Tipo entero y decimal 
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal); // number number

// 2. Notación cientifica
const cientifico = 1.23e5; // 1.23 * 10^5
console.log(cientifico); // 123000

// 3. Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;
console.log(infinito +"\n"+  noEsUnNumero); // Infinity NaN

// 4. Operaciones aritmeticas
// Suma, Resta, Multiplicacion, Division
const suma = 5 + 3;
const resta = 10 - 4;
const multiplicacion = 6 * 7;
const division = 20 / 4;
console.log(suma, resta, multiplicacion, division); // 8 6 42 5

//5. Modulo y Exponenciacion
const modulo = 15 % 8; // Resto de la division
const exponenciacion = 2 ** 3; // 2 elevado a la 3
console.log(modulo, exponenciacion); // 7 8

// 6. Precisión 
const resultado = 0.1 + 0.2; // Resultado esperado: 0.3
console.log(resultado); // Resultado real: 0.30000000000000004
// Solución: usar toFixed()
console.log(resultado.toFixed(1)); // 0.3

// 7. Operaciones avanzadas
const raizCuadrada = Math.sqrt(16); // Raíz cuadrada
const valorAbsoluto = Math.abs(-5); // Valor absoluto
const aleatorio = Math.random(); // Número aleatorio entre 0 y 1
const redondear = Math.round(4.7); // Redondear al entero más cercano
console.log(raizCuadrada, valorAbsoluto, aleatorio, redondear); // 4 5 0.123456789 5


