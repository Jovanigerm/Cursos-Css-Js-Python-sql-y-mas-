"use strict"
/*
    Calculadora
    -Pida dos numeros por pantalla
    -Si metemos uno mal que nos los vuelva a pedir
    -En el cuerpo de la pagina, en una alerta y por la consola el 
    resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/
var num1 = parseInt(prompt("Ingresa un numero"));
var num2 = parseInt(prompt("Ingresa otro numero"));
while(num1<=0 ||num2<=0||isNaN(num1)||isNaN(num2)){
    num1 = parseInt(prompt("Ingresa un numero"));
    num2 = parseInt(prompt("Ingresa otro numero"));
}
var resultado= "La suma es: "+(num1+num2) + "</br>"+ 
               "La resta es: "+(num1-num2) + "</br>"+
               "La Multiplicacion es: "+(num1*num2) + "</br>"+ 
               "La divicion es: "+(num1/num2) + "</br>";
document.write(resultado);
resultado= "La suma es: "+(num1+num2) + "\n"+ 
               "La resta es: "+(num1-num2) + "\n"+
               "La Multiplicacion es: "+(num1*num2) + "\n"+ 
               "La divicion es: "+(num1/num2) + "\n";
alert(resultado);
console.log(resultado);
