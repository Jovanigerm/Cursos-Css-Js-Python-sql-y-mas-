"use strict"

/*
    Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
    hasta introducir un numero negativo y ahi mostrar el resultado
*/

var num1 = parseInt(prompt("Ingresa el un valor",0));
var suma = 0 + num1;

for(var i = 0; num1 > 0 || isNaN(num1) ; i++ ){
    console.log(suma);
    num1 = parseInt(prompt("Ingresa otro valor",0));
    if(num1<=0 || isNaN(num1)){
        break;
    }
    suma = suma + num1;
}
var media = suma / i;
alert("Suma total: " + suma);
alert("Media: " + media);
