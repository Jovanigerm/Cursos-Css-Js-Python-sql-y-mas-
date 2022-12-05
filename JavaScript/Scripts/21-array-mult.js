'use strict';
var categorias = ['accion','terror','comedia'];
var peliculas = ['la verdad duele','La vida es bella','Gran torino'];

var cine = [categorias,peliculas];
// console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][2]);

var elemento = "";
do{
    elemento = prompt("Introduce una pelicula");
    peliculas.push(elemento);    
}
while(elemento != "ACABAR");
peliculas.pop();
document.write(peliculas);