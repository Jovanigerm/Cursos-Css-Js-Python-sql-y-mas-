"use strict"

/*
    Mostrar todos los numeros impares que hay entre 
    dos numeros introducidos entre el usuario
*/

var num1 = parseInt(prompt("Ingresa el numero inicial"));
var num2 = parseInt(prompt("Ingresa el numero final"));
for(var i = num1; i<=num2;i++){
    if((i%2)!=0){
        document.write(i+ "<br/>");
    }
}