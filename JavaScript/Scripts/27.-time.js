'use strict'
window.addEventListener('load',()=>{
    function intervalo(){
        // Timers: se repite cada cierto tiempo
        var tiempo = setInterval(function(){
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "40px";
            }else{
                encabezado.style.fontSize = "50px";
            }
            console.log(1);
        }, 1000);
        return tiempo;
    }
    var tiempo = intervalo();
    // Setuot: se ejecuta solo una ocacion
    var tiempo2 = setTimeout(function(){
        var encabezado = document.querySelector("h2");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "40px";
        }else{
            encabezado.style.fontSize = "50px";
        }
        console.log(2);
    }, 1000);

    var stop = document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("Paraste el intervalo");
        clearInterval(tiempo);
    });
    
    var start = document.querySelector("#start");
    start.addEventListener("click",function(){
        alert("Iniciaste el intervalo");
        intervalo();
    });
});