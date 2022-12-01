'use strict'
function holaMundo(texto){
    var hola_mundo = 'Hola mundo soy una variable global';
    console.log(texto);
    console.log(numero.toString()); //--------> Permite trasformar a un string
    console.log(hola_mundo);


}
var numero = 12;
var texto = 'Hola mundo soy una variable global';
holaMundo(texto)
// console.log(hola_mundo); ---------> Esto no se puede por no ser variable global

