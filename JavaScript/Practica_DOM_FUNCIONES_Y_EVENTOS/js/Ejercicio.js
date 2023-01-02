'use strict'
    window.addEventListener('load',function(){
        var formulario = document.querySelector("#formulario");
        var box_dashed = document.querySelector(".dashed");
        box_dashed.style.display="none";
        formulario.addEventListener('submit',function(){
            console.log("Evento submit CApturado");
            var nombre = document.querySelector("#nombre").value;
            var app = document.querySelector("#app").value;
            var edad = parseInt( document.querySelector("#edad").value);
            if(nombre.trim() == null || nombre.trim().length == 0){
                document.querySelector("#error_nombre").innerHTML="El nombre no es valdo";
                document.querySelector("#error_nombre").style.color="red";
                return false;
            }else{
                document.querySelector("#error_nombre").style.display="none";
            }
            if(app.trim() == null || app.trim().length == 0){
                document.querySelector("#error_app").innerHTML="El Apellido no es valido";
                document.querySelector("#error_app").style.color="red";
                return false;
            }else{
                document.querySelector("#error_app").style.display="none";
            }
            if(edad == null || edad <= 0 || isNaN(edad)){
                document.querySelector("#error_edad").innerHTML="La edad no es valida";
                document.querySelector("#error_edad").style.color="red";
                return false;
            }else{
                document.querySelector("#error_edad").style.display="none";
            }
            
            box_dashed.style.display="block";
            var p_nombre = document.querySelector("#p_nombre span");
            var p_apellidos = document.querySelector("#p_apellidos span");
            var p_edad = document.querySelector("#p_edad span");
            
            p_nombre.innerHTML = nombre;
            p_apellidos.innerHTML = app;
            p_edad.innerHTML = edad;
            // var datos_usuario = [nombre , app , edad];
            // var inidice;

            // for(inidice in datos_usuario){
            //     var parrafo = document.createElement("p");
            //     parrafo.append(datos_usuario[inidice]);
            //     box_dashed.append(parrafo);
            // }
        });

    }
);