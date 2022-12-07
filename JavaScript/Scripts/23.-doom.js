'use strict'
// DOM- Document Object Model
function cambiaColor(color){
    caja.style.background=color;
}
// Seleccion de elemento html
// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
// Imprecion del valor del elemento con innerHTML
console.log(caja.innerHTML);
// Cambio de valor del elemento con innetHTML 
caja.innerHTML = "Texto desde js!";
// Asignacion de estilos desde js
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className="Hola";
console.log(caja);
