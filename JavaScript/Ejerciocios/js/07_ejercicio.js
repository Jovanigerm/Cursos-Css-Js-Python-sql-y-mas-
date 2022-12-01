"use strict"
/*
    Tabla de multiplicar de un numero introducido por pantalla
*/

var num = parseInt(prompt("Ingresa un numero a multiplicar"));
var resultado;
while(num<=0 || isNaN(num)){
    num = parseInt(prompt("Ingresa un numero a multiplicar"));
}
for(var i = 1; i <= 10; i++){
    resultado = num * i;        
    document.write("<h1>"+num+" * "+i+" = "+resultado+"</h1>")
}
