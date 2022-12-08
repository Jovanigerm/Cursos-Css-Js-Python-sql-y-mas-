'use strict'
// Load permite cargar el js en el header y no al final de codigo
window.addEventListener('load',()=>{
    // Eventos del raton
    function cambiarColor(){
        var bg = boton.style.background; 
        if(bg == "green"){
            boton.style.background="red";
        }else{
            boton.style.background = "green";
        }
        boton.style.padding="10px";
        boton.style.border="1px solid blue";
        return true;
    }
    
    // Click
    var boton = document.querySelector('#boton');
    boton.addEventListener("click",function(){
        cambiarColor();
    });
    // Mous Over
    boton.addEventListener('mouseover',function(){
        boton.style.background="#ccc";
    });
    
    // Mous Out
    boton.addEventListener('mouseout',function(){
        boton.style.background="white";
    });
    
    // Focus
    var input = document.querySelector("#nombre");
    input.addEventListener('focus',function(){
        console.log("[focus] Estas dentro del input");
    });
    // Blur
    input.addEventListener('blur',function(){
        console.log("[Blur] Estas fuera del input");
    });
    // Keydown
    input.addEventListener('keydown',function(event){
        console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });
    // Keypress
    input.addEventListener('keypress',function(event){
        console.log("[keypress] Tecla precionada ", String.fromCharCode(event.keyCode));
    });
    // Keyup
    input.addEventListener('keyup',function(event){
        console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
    });
});