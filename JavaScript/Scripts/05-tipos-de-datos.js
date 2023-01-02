"use strict"

//Operadores
var numero1 = 1;
var numero2 = 3;
var operacion = numero1+numero2;
alert("El resltado de la operacion es: " + operacion);
//Tipos de datos

var numero_entero = 44;
var cadena_texto = "Hola";
var verdadero_o_falso = true;
var numero_falso = "34.6";
//parseInte genera un numero entero
console.log(parseInt(numero_falso)+6);
//parseFloat genera un numero decimal
console.log(parseFloat(numero_falso)+6);
//String Cambia el tipo de dato por un texto
console.log(String(numero_falso+6));
//Number Cambia el tipo de datos por un numero
console.log(Number(numero_falso)+7);
//typeof muestra el tipo de dato que es una variable
console.log(typeof(cadena_texto));
