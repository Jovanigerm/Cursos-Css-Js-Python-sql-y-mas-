"use strict"
//Condicinal IF
//Si A es igual a B entonces haz algo

var edad1=30;
var edad2=12;
//Si pasa esto
if(edad1>edad2){
    //Ejecutar esto
    console.log("Edad 1 es mayor que la edad 2");
}else{
    console.log("Edad 2 es mayor que la edad 1");
}

/*
< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
== igual
!= distinto de
*/
var edad_final = 51;
var nombre="Jorge";
if(edad_final>=18){
    console.log(nombre + " es mayor de edad");
    if(edad_final<=33){
        console.log("Aun eres milenial");
    }else if(edad_final>=70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres milenial");
    }
}else{
    console.log(nombre + " es menor de edad");
}

//Operadores logincos
/* 
AND(y) &&
OR (o) ||
NEGACION !
*/

var year = 2018;
// Negacion
if(year != 2016){
    console.log("El año no es 2016, realmente es " + year);
}
//AND
if(year >= 2000 && year <=2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}
//OR
if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}
