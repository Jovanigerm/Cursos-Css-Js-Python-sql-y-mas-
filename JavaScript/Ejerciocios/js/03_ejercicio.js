"use strict"

/* 
    Que muestre dodos los numeros entre dos numeros ingresados por el usuario
*/

var num1 = parseInt(prompt("Ingresa el numero inicial"),0);
var num2 = parseInt(prompt("Ingresa el numero final"),0);

document.write("<h1> De "+num1+" a "+num2+" estan estos numeros: <h1>");
for(var i =num1; i<=num2; i++){
    document.write(i+" <br/> ")
}

/* Mi respuesta 
while(num1<=0 || num2 <=0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingresa el numero inicial"),0);
    num2 = parseInt(prompt("Ingresa el numero final"),0);
 }
 while(num1<num2){
    num1++;
    if(num1==num2){
        break;
    }
    console.log(num1);
}
*/