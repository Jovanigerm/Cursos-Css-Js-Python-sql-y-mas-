'use strict'
// const API_Url_pokemon = "https://pokeapi.co/api/v2/pokemon/1/";
// fetch(API_Url_pokemon)
// .then(Response => Response.json())
// .then(data =>{
//     let elemt = document.querySelector(".registros");
//     elemt.innerHTML=
//     `<p>${data.name}</p>
//     <img src='${data.sprites.front_default}'/>
//     `;
// })
// .catch(err=>console.log(err));

const API_Url = "https://pokeapi.co/api/v2/pokemon/";
fetch(API_Url).then(Response => Response.json()).then(data=>{
    for(var i = 0; i< data.results.length;i++){
        var datos = data.results[i].url;
        fetch(datos).then(Response=>Response.json()).then(info=>{
            console.log(info);
            document.write("<div style='border:1px solid red;width:100px;display:flex; flex-direction:column'>");
                document.write("<p>"+info.name +"</p>");
                document.write("<img src='"+info.sprites.front_default +"'/>");
            document.write("</div>");
        });
    }
});