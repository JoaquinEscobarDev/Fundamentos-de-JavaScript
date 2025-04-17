// Capacidades que tienen las funciones al igual que otros objetos

/*
1. Pasar funciones como argumentos -> call back

function a (){}
function b (a) {}

2. Retornar funciones -> closures

function a (){
    function b(){}
    retunr b
}

3. Asignar funciones a variables -> Expresion de funcion

const a = function (){}

4. Tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj) // llama a la funcion a y le pasa el objeto como contexto

5. Anidar funciones -> Nested functions

function a (){
    function b (){
        function c (){
        }
        c()
    }
    b()
}
a()

6. ¿Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Apollo',
    launchMessage: function launchMessage(){
        console.log('Lanzando cohete🚀')
    }
}

rocket.launchMessage() // Llamar a la función dentro del objeto


*/