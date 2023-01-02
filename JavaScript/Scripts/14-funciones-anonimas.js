"use strict"
// Funciones anonimas y callback
// Es una funcion que no tiene nombre
var pelicula = function(nombre){
    return "La pelicula " + nombre;
}
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma =numero1+numero2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}
sumame(2,4, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ",(dato*2));
});
