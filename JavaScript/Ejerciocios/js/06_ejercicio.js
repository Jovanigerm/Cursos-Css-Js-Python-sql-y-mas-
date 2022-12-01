"use strict"

/* que nos diga si un numero es par o inpar
    -ventana propt
    -si no es valodi que nos pida de nuevo el numero
*/ 

    var num= parseInt(prompt("Ingresa un numero"));

while(num<=0||isNaN(num)){
    num= parseInt(prompt("Ingresa un numero"));
}
if((num%2)==0){
    document.write("<h1>El numero: "+num+" es par</h1>")
}else{
    document.write("<h1>El numero: "+num+" es inpar</h1>")
}