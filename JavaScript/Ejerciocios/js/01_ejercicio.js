"use strict"

//Programa que pida dos numeros y que diga cual es el mayor, el menor y si son iguales si son
//caracteres distintos a numeros nos pida de nuevo los datos

var num1 = parseInt(prompt("Ingresa el valor de numero 1: ",0));
var num2 = parseInt(prompt("Ingresa el valor de numero 2: ",0));

while(num1 <= 0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingresa el valor de numero 1: ",0));
    num2 = parseInt(prompt("Ingresa el valor de numero 2: ",0));
    alert("Ingresa datos correctos que no sean menores a 0 o letras");
}
if(num1==num2){
    alert("Los numeros son iguales");
}else if(num1>num2){
    alert("El numero 1 es mayor");
}else if(num1<num2){
    alert("El numero 2 es mayor");
}else{
    alert("Ingresa datos correctos");
}