"use strict"

//Switch

var edad= 24;
var imprime = "";
switch(edad){
    case 18:
        imprime="Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime="Ya eres adulto";
    break;
    case 40:
        imprime="Crisis de los 40";
    break;
    case 75:
        imprime="Eres ya un ansiano";
    break;
    default:
        imprime="Tu erar es neutra";
    }
    console.log(imprime);