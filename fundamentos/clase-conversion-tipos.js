// 1. Explicit Type Casting

const string = '42';
const integer = parseInt(string);
console.log(integer); // 42
console.log(typeof integer); // number

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float); // 3.14
console.log(typeof float); // number

const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(decimal); // 10
console.log(typeof decimal); // number

// 2. Implicit Type Casting
// Si se encuentra al menos 1 string se concatena, si no lo hay lo suma
const sum = '5' + 3;
console.log(sum); // 53

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean); // 3true

const sumWithNumber = 2 + true;
console.log(sumWithNumber); // 3

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
console.log("--------------------------------")
console.log(stringValue + stringValue); // 1010
console.log(stringValue + numberValue); // 1010
console.log(stringValue + booleanValue); // 10true
console.log(numberValue + stringValue); // 1010
console.log(numberValue + numberValue); // 20
console.log(numberValue + booleanValue); // 11
console.log(booleanValue + stringValue); // 10true
console.log(booleanValue + numberValue); // 11
console.log(booleanValue + booleanValue); // 2
console.log("--------------------------------")

