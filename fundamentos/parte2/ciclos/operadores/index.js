/*
Operadores de comparación

*/

// Operador de igualdad
console.log(1 == 1); // true
console.log(1 == 2); // false

// Operador de desigualdad
console.log(1 != 1); // false
console.log(1 != 2); // true

// Operador de igualdad estricta
console.log(1 === 1); // true
console.log(1 === 2); // false

// Operador de desigualdad estricta
console.log(1 !== 1); // false
console.log(1 !== 2); // true

// Operador mayor que
console.log(1 > 1); // false


// Operador menor que
console.log(1 < 1); // false

// Operador mayor o igual que
console.log(1 >= 1); // true

// Operador menor o igual que
console.log(1 <= 1); // true

// Operador de comparación de cadenas
console.log('a' == 'a'); // true
console.log('a' != 'b'); // true
console.log('a' === 'a'); // true
console.log('a' !== 'b'); // true
console.log('a' > 'b'); // false
console.log('a' < 'b'); // true
console.log('a' >= 'a'); // true
console.log('a' <= 'b'); // true

// Operador de comparación de booleanos
console.log(true == true); // true
console.log(true != false); // true
console.log(true === true); // true
console.log(true !== false); // true
console.log(true > false); // true
console.log(true < false); // false
console.log(true >= false); // true
console.log(true <= true); // true

// Operador de comparación de null y undefined
console.log(null == null); // true
console.log(null != undefined); // false
console.log(null === null); // true
console.log(null !== undefined); // true
console.log(null > undefined); // false
console.log(null < undefined); // false
console.log(null >= undefined); // false
console.log(null <= undefined); // false

// Operador de comparación de objetos
console.log({} == {}); // false
console.log({} != {}); // true
console.log({} === {}); // false
console.log({} !== {}); // true

// Operador de comparación de arreglos
console.log([] == []); // false
console.log([] != []); // true
console.log([] === []); // false
console.log([] !== []); // true

// Operador de comparación de funciones
console.log(function(){} == function(){}); // false
console.log(function(){} != function(){}); // true
console.log(function(){} === function(){}); // false
console.log(function(){} !== function(){}); // true

// Operador de comparación de fechas
console.log(new Date() == new Date()); // false
console.log(new Date() != new Date()); // true
console.log(new Date() === new Date()); // false
console.log(new Date() !== new Date()); // true

// Operador de comparación de expresiones regulares
console.log(/a/ == /a/); // false
console.log(/a/ != /b/); // true
console.log(/a/ === /a/); // false
console.log(/a/ !== /b/); // true

// Operador de comparación de símbolos
console.log(Symbol() == Symbol()); // false
console.log(Symbol() != Symbol()); // true
console.log(Symbol() === Symbol()); // false
console.log(Symbol() !== Symbol()); // true

// Operador de comparación de BigInt
console.log(1n == 1n); // true
console.log(1n != 2n); // true
console.log(1n === 1n); // true
console.log(1n !== 2n); // true
console.log(1n > 2n); // false
console.log(1n < 2n); // true




