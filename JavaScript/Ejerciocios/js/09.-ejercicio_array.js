"use strict"
/*
    1.- Pida 6 numeros por pantalla y los meta en un array
    2.- Mostrar el array entero (Todos sus elementos en el cuerpo de la pagina y en la consola)
    3.- Ordenarlo y mostrarlo
    4.- Invertir su orden y mostrarlo
    5.- Mostrar cuantos elementos tiene el array
    6.- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
        (Se valora el uso de funciones)
*/


// Resolucion propia

// // Se declara la variable que sera un array
// var numeros = [];

// var numero_agregados = "";
// do{
//     // Se solicita un numero
//     numero_agregados = prompt("Introduce un numero");
//     // Se agrega al array
//     numeros.push(numero_agregados);
//     // Se cuenta la cantidad de registros dentro del array
//     var cantidad = numeros.length;
// }while(cantidad <= 5 );

// document.write("<h1>Array</h1><br>");
// document.write(numeros + "<br>");
// console.log("Array por consola");
// console.log(numeros);
// document.write("<h1>Array ordenado</h1><br>");
// document.write(numeros.sort() + "<br>");
// document.write("<h1>Array reverso</h1><br>");
// document.write(numeros.reverse() + "<br>");
// document.write("<h1>Cantidad de registros</h1>");
// document.write(numeros.length + "<br>");

// var consulta = prompt("¿Que numero quieres buscar?");
// var consulta2 = numeros.find(numero=>numero == consulta);
// var indice = numeros.findIndex(numero=>numero == consulta);
// if(consulta2 != null){
//     document.write("Numero encontrado en indice" + indice);
// }else{
//     document.write("Numero no encontrado");
// }

// Resolucion del curso

function mostrarElementos(elementos,textoCustom = ""){
    document.write("<h1>Elementos del array"+textoCustom+"</h1>" );
    document.write("<ul>");
    elementos.forEach((elemento,indice)=>{
        document.write("<li>"+ elemento +"</li>");
    })
    document.write("</ul>");
    
}
var numeros = [];
for(var i = 0; i <= 5; i++ ){
    // numeros[i] = parseInt(prompt("Ingresa un numero",0));
    numeros.push(parseInt(prompt("Ingresa un numero",0)));
}
mostrarElementos(numeros);
console.log(numeros);
numeros.sort();
console.log(numeros);

