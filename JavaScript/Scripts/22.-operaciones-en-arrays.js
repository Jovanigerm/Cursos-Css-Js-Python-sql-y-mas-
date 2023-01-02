'use strict';
var categorias = ['accion','terror','comedia'];
var peliculas = ['la verdad duele','La vida es bella','Gran torino'];
var peliculas2 = ['la verdad duele','La vida es bella','Gran torino'];

var cine = [categorias,peliculas];
// console.log(cine);

// Obtines el indice de un dato
var indice = peliculas.indexOf("Gran torino");
console.log(indice);
console.log(peliculas);
// Validas que el dato exista realmente
if(indice > -1){
    // Indicas que eliminaras el indice en del array
    peliculas.splice(indice,1);
}
console.log(peliculas);

var cadena = "texto1, texto2, texto 3";
// Especifica el carácter a usar para la separación de la cadena
var cadena_array =cadena.split(", ");

console.log(cadena);
console.log(cadena_array);

// Ordena la cadena
var orden = peliculas2.sort();
console.log(orden);
var reverso = peliculas2.reverse();
console.log(reverso);


//Busquedas 

var lenguajes = new Array("php","js","Go","java","python","css","c++");

// las operaciones son las mismas


// var busqueda = lenguajes.find(function(lenguaje){
//     return lenguaje == "PHP";
// });

// Devuelve el primer elemento de la matriz
var busqueda = lenguajes.find(lenguaje => lenguaje == "js");
// Devuelve el indice del elemento de la matriz
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "js");
console.log(busqueda);
console.log(busqueda2);

var precios = [10,20,50,80,12];
// Comprueba si al menos un elemento del array cumple con la condición
var busqueda3 = precios.some(precio => precio <10);
console.log(busqueda3);