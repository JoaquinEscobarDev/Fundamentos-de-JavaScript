/*

for in --->  objetos
propiedades = valor 

array, string
items/elementos

for (variable in objeto){
código a ejecutar
}


*/ 

const listaDeCompras = {
    Manzana: 5,
    Pera: 10,
    Uva: 15,
    Sandia: 20,
    Naranja: 25,
    Limón: 30
}

for (fruta in listaDeCompras){
    console.log(fruta);
}

for (fruta in listaDeCompras){
    console.log(`La ${fruta} tiene un valor de ${listaDeCompras[fruta]}`); 
}
