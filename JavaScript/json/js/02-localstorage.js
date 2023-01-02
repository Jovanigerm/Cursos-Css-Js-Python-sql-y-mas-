'use strict'
window.addEventListener('load',()=>{
    // Comprobar disponibilidad del LocalStorage
    if(typeof(Storage) !== 'undefined'){
        console.log("LocalStorage disponible");
    }else{
        console.log("Incompatible con LocalStorage");
    }
    // Guardar datos
    localStorage.setItem("titulo","curso de Symfony");
    // Recuperar elemento 
    console.log(localStorage.getItem("titulo"));
    document.querySelector("#peliculas").innerHTML = (localStorage.getItem("titulo"));

    // Guardar objetos
    var usuario = {
        nombre:"Victor Robles",
        email: "victor@victor.com",
        web:"VictorBlesweb.es",   
    };
    localStorage.setItem("usuario",JSON.stringify(usuario));
    
    // Recuperar objetos
    var userjs = JSON.parse(localStorage.getItem("usuario"));
    console.log(userjs);
    document.querySelector("#datos").append(userjs.nombre + " - " + userjs.email + " - " + userjs.web );

    // Eliminar objetos
    localStorage.removeItem("usuario");
    localStorage.clear();
});

