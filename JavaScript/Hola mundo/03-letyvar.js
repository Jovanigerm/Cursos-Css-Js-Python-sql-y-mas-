'use strict';
// Pruebas con let y var

//Prueba var
var numero = 40;
console.log(numero) //valor 40

if(true){
    var numero = 50;
    console.log(numero) // valor 50
}
console.log(numero) // valor 50

//Prueba let
//Actua a nivel de bloque
let texto = "Curso js";
console.log(texto) //Valor js

if(true){
    let texto = "Curso laravel 5";
    console.log(texto); // Valor larvel 5
}
console.log(texto); // Valor js

