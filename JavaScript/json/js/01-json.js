'use strict'
window.addEventListener("load",()=>{
    var pelicula = {
        titulo: "Batman vs Superman",
        year: 2017,
        pais: "US"
    };
    console.log(pelicula);
    // Imprimir un caracter de un objeto
    console.log(pelicula.titulo);
    // Cambiar el valor de un caracter de un objeto
    pelicula.titulo="Supe";
    console.log(pelicula);
    console.log(pelicula.titulo);
        
    // Array
    var peliculas = [
        {titulo: "la verdad Duele",year:2021,pais:"francia"},
        pelicula
    ];
    var caja_peliculas = document.querySelector("#peliculas");
    var index;
    for(index in peliculas){
        // Crea un elemento parrafo
        var p = document.createElement("p");
        // permite agregar también objetos de cadena
        p.append(peliculas[index].titulo + " - " + peliculas[index].year);
        caja_peliculas.append(p);
    }
    
});
