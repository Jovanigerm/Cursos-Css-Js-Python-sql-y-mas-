"use strict"

//Funcion
// una funcion es una agrupacion reutilizable de un conjuntp de instrucciones


//Define la funcion
function calculadora(){
    //Regresa un valor
    return "Hola soy la calculadora";
}
//Invocar o llamar la funcion
console.log(calculadora());

/////////////////////////////////////////////////////////////////////////////
//Define la funcion
function calculadora2(){
    //Conjunto de instrucciones
    console.log("////////////////////////");
    console.log("Hola soy la calculadora");
    console.log("Si soy yo");
}
//Invocar o llamar la funcion
calculadora2();


////////////////////////////////////////////////
//Parametros
console.log("////////////////////////");
console.log("////////////////////////");

function calculadora3(numero1,numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("Divicion: " + (numero1/numero2));
    return "Hola";
}
calculadora3(10,15);

/////////////////////////////////////////////////
//Dentro de un bucle
for(var i = 0 ; i<=1; i++){
    calculadora3(i, 2);
    document.write("////////// <br>");
}

/////////////////////////////////////////////////
// Parametros opcionales
console.log("////////////////////////");
console.log("////////////////////////");
function calculadora3(numero1,numero2, mostrar = true){
    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicacion: " + (numero1*numero2));
        console.log("Divicion: " + (numero1/numero2));    
    }else{
        document.write("Suma: " + (numero1+numero2) + "</br>");
        document.write("Resta: " + (numero1-numero2)+ "</br>");
        document.write("Multiplicacion: " + (numero1*numero2)+ "</br>");
        document.write("Divicion: " + (numero1/numero2)+"<br>");    
    }
}
// calculadora3(10,15);

/////////////////////////////////////////////////
//Funciones dentro de otras

function PorConsola(numero3,numero4){
    console.log("Suma: " + (numero3+numero4));
    console.log("Resta: " + (numero3-numero4));
    console.log("Multiplicacion: " + (numero3*numero4));
    console.log("Divicion: " + (numero3/numero4));    
}
function PorPantalla(numero3,numero4){
    document.write("</br>////////////////////////////////////</br>");
    document.write("Suma: " + (numero3+numero4) + " </br>");
    document.write("Resta: " + (numero3-numero4)+ "</br>");
    document.write("Multiplicacion: " + (numero3*numero4)+ "</br>");
    document.write("Divicion: " + (numero3/numero4));    
}
function calculadora4(numero3,numero4,valor = true){
    if(valor){
       PorConsola(numero3,numero4);
    }else{
        PorPantalla(numero3,numero4);
        
    }
}
calculadora4(2,2,true);
calculadora4(2,2,false);