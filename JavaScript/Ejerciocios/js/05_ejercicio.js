"use strict"

/*
    Muestre todos los numeros divisores de un numero intriduce en promt
*/

var num = parseInt(prompt("Ingresa un numero"));
console.log(num);

for(var i = 0; i <= num;i++){
    if((num%i)==0){
        document.write(i + " es divisor<br/>");
    }
}