"use strict"

var numero = 0;

do{
    if(numero==0){
        console.log("Inicio de bucle do while");
    }
    console.log(numero);
    /*  
    if(numero==50){
        break; // Sirve para parar un bucle
    }
    */
    if(numero==100){
        console.log("Final de bucle")
    }
    numero++;
}while(numero <=100);