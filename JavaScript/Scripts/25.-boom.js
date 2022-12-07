'use strict'

// BOM - Browser Object Model
function getBom(){
    // Datos de la pantalla de momento
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    // Datos fijos de la pantalla
    console.log(screen.width);
    console.log(screen.height);
    // Obtienes la direccion url
    console.log(window.location.href)
}
function redirect(url){
    window.location.href = url;
}
function abrirVentana(url){

    window.open(url,"","width=400px,height=400px");
}
getBom();
