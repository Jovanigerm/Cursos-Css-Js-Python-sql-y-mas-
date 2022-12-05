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

document.write("<h1> Lenguajes de programacion del 2021: ");
document.write("<ul>");

// las opeacione siguientes son lo mismo


// for(var i = 0; i<lenguajes.length; i++){
//     document.write("<li>"+lenguajes[i]+"</li>")
// }

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
}

document.write("</ul>");

