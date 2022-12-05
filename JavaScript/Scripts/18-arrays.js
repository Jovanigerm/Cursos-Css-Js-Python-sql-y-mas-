'use strict'

// Array, Arrelgos, Matrices
var nombres = ['Jorge', 'Juan','Mauricio','Miguel', 51, true];
var lenguajes = new Array("php","js","Go","java","python","css","c++");

console.log(nombres[2]);        // Selecciona un registro en especifico
console.log(lenguajes);         // Muestra todo el arreglo
console.log(nombres.length);    // Muestra la cantidad de registros dentro del arreglo
var elemento = parseInt(prompt("Que elemento del array quieres?"));
if(elemento>=nombres.length){
    alert("Introduce un numero correcto menor a "+ nombres.length);
}
else{
    alert(nombres[elemento]);
}