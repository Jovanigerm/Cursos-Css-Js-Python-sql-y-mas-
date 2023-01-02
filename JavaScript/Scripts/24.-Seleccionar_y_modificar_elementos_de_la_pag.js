'use strict'

// Conseguir elementos por su etiqueta 
var todosLosDivs = document.getElementsByTagName('div');
// Las sigientes 2 lineas son lo mismo a comparacion que innerHTML te permite asignar nuevo valor
// var contenidoEnTexto = (todosLosDivs[2].textContent);
var contenidoEnTexto = (todosLosDivs[2].innerHTML);
console.log(todosLosDivs);

// todosLosDivs.forEach((valor,indice) => {
console.log(contenidoEnTexto);

var seccion = document.querySelector("#miseccion");        
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        
        
        // Creacion de elementos con CreateElemt
        var parrafo = document.createElement("p");
        //createTextNode Una cadena que contiene los datos que se colocarán en el nodo de texto.
        var texto =document.createTextNode(todosLosDivs[valor].textContent);
        //El método inserta un conjunto de objetos de cadena después del último hijo del Element.
        parrafo.append(texto);
        seccion.append(parrafo);        
    
    }
};


//Conseguir elementos por su clase css
var divsRojo = document.getElementsByClassName('rojo');
var divsAmarillo = document.getElementsByClassName('amarillo');
var div;
for(div in divsRojo){
    if(divsRojo[div].className=="rojo"){
        divsRojo[div].style.background="red";
    }
}
for(div in divsAmarillo){
    if(divsAmarillo[div].className=="amarillo"){
        divsAmarillo[div].style.background="yellow";
    }
}
//Query selector
var id = document.querySelector("#encabezado");
console.log(id);
//Query Selector All
var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);
