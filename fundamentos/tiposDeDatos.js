//Primitivos 

//String
let nombre = "Juan";

//Number
let edad = 25

//Boolean
let esMayor = true

//Undefined
let noDefinido = undefined;

//Null
let noHayValor = null

//Symbol
let simboloUnico = Symbol('único')

//BigInt
let bigInt = 1234567890123456789012345678901234567890n



//Complejos

//Array
let frutas = ['manzana', 'pera', 'uva']

//Object
let persona = {
    nombre: 'Juan',
    edad: 25
}

//Function
let sumar = function(a, b) {
    return a + b
}

//Date
let fecha = new Date()

//Expresiones regulares
let expresionRegular = /[a-z]/

//Tipos de datos especiales

//Map
let mapa = new Map();
mapa.set('clave1', 'valor1');
mapa.set('clave2', 'valor2');

//Set
let conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);

//WeakMap
let objetoDebil = {};
let mapaDebil = new WeakMap();
mapaDebil.set(objetoDebil, 'valor débil');

//WeakSet
let conjuntoDebil = new WeakSet();
let objetoDebil2 = {};
conjuntoDebil.add(objetoDebil2);
