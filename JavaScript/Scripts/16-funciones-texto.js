'use strict'

// Transformacion de textos

var numero = 44;
var texto1 = "Bienvenido al curso de javascript curso de Victor";
var texto2 = "Es un buen curso";
// Combetir un numero en cadena
var dato = numero.toString();
    console.log("Numero trasformado en cadena: " + dato + " " + typeof(dato))
// Combertir un texto en minusculas
    dato = texto1.toLowerCase();
    console.log("Texto en minusculas: "+dato + " "+ typeof(dato))

// Combertir un texto en Mayusculas
    dato = texto1.toUpperCase();
    console.log("Texto en Mayusculas: "+dato + " "+ typeof(dato))

// Calcular longitud de un texto
    dato = texto1.length;
    console.log("La longitud del texto es: " + dato)
    var nombre = ["hola","hola"]
    console.log("La longitud de la cade es: " + nombre.length)

// Concatenar o unir textos
    //var textoTotal = texto1 + " " + texto2;
    var textoTotal = texto1.concat(" " + texto2);
    console.log(textoTotal);

//---------------------------------------------------------------------------------------
//------------------Busqueda de texto------------------
var busqueda = texto1.indexOf("curso");
    console.log("(indexOf) La posicion de la primera aparicion de la palabra es: "+ busqueda);
    
    busqueda = texto1.lastIndexOf("curso");
    console.log("(lastIndexOf) La posicion de la ultima aparicion de la palabra es: "+ busqueda);
    
    busqueda = texto1.search("curso");
    console.log("(search) La posicion de la primera aparicion de la palabra es: "+ busqueda);
    
    busqueda = texto1.match(/Victor/g);
    console.log(busqueda);
    
    busqueda = texto1.substr(14,5);
    console.log("(subtr) Muestra 5 caracteres despues del caracter 14: " + busqueda);
    
    busqueda = texto1.charAt(44);
    console.log("(chartAt) Saca la letra concreta de un string: " + busqueda);

    //--------------Regresan un true o falce--------------
    
    busqueda = texto1.startsWith("Bienvenido");
    console.log("(startsWith) Busca al inicio del string un texto en especifico: " + busqueda );
    
    busqueda = texto1.endsWith("Victor");
    console.log("(endsWith) Busca al Final del string un texto en especifico: " + busqueda );

    busqueda = texto1.includes("javascript");
    console.log("(includes) Busca una palabra en el string un texto: " + busqueda );

    //--------------Remplazar texto------------------------
var busqueda = texto1.replace("javascript","JavaScript");
    console.log("(replace) Se remplaza una palabra: "+busqueda);
    busqueda = texto1.slice(14,22);
    console.log("(slice) Corta el texto y comienza desde el caracter indicado: " + busqueda);
    busqueda = texto1.split(" "); //-----------> Genera un indice con el texto
    console.log(busqueda) 
    texto1 = "       Bienvenido al curso de javascript curso de Victor     ";
    busqueda = texto1.trim();
    console.log("(trim)Elimina los espacios al inicio y al final de un texto: "+busqueda)

//
