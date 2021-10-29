
function buscarCancion(){
    let cancion = document.getElementById("buscar").value;
    cancion = cancion.replace(/ /g, "").toLowerCase();

    if(cancion == 'enlosmontes'){
        location.href ="plantillas/enlosmontes.html";
        }else if(cancion == 'medeleitoenti'){
          location.href="plantillas/medeleitoenti.html";
        }else if(cancion == 'unadorador'){
            location.href="plantillas/unadorador.html";
          }else{
            location.href="index.html";
        }

}

function buscarCancion2(){
    let input = document.getElementById("buscar");

    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {

        let cancion = document.getElementById("buscar").value;
        cancion = cancion.replace(/ /g, "").toLowerCase();

        if(cancion == 'enlosmontes'){
            location.href ="plantillas/enlosmontes.html";
            }else if(cancion == 'medeleitoenti'){
              location.href="plantillas/medeleitoenti.html";
            }else if(cancion == 'unadorador'){
                location.href="plantillas/unadorador.html";
              }else{
                location.href="index.html";
           }
        }
});
}


function cambiarMas(){
    let notas = document.querySelector("body > pre").getElementsByClassName("nota");
    
    for (let i in notas) {
        if(notas[i].innerText == "Do"){
            notas[i] = notas[i].innerText = "Do#";
        } 
        
        else if(notas[i].innerText == "Re"){
            notas[i] = notas[i].innerText = "Re#";
        }

        else if(notas[i].innerText == "Mi"){
            notas[i] = notas[i].innerText = "Fa";
        } 

        else if(notas[i].innerText == "Fa"){
            notas[i] = notas[i].innerText = "Fa#";
        } 

        else if(notas[i].innerText == "Sol"){
            notas[i] = notas[i].innerText = "Sol#";
        } 

        else if(notas[i].innerText == "La"){
            notas[i] = notas[i].innerText = "La#";
        } 

        else if(notas[i].innerText == "Si"){
            notas[i] = notas[i].innerText = "Do";
        }
        
        else if(notas[i].innerText == "Do#"){
            notas[i] = notas[i].innerText = "Re";
        }

        else if(notas[i].innerText == "Re#"){
            notas[i] = notas[i].innerText = "Mi";
        }

        else if(notas[i].innerText == "Fa#"){
            notas[i] = notas[i].innerText = "Sol";
        } 

        else if(notas[i].innerText == "Sol#"){
            notas[i] = notas[i].innerText = "La";
        } 

        else if(notas[i].innerText == "La#"){
            notas[i] = notas[i].innerText = "Si";
        }

        if(notas[i].innerText == "Dom"){
            notas[i] = notas[i].innerText = "Do#m";
        } 
        
        else if(notas[i].innerText == "Rem"){
            notas[i] = notas[i].innerText = "Re#m";
        }

        else if(notas[i].innerText == "Mim"){
            notas[i] = notas[i].innerText = "Fam";
        } 

        else if(notas[i].innerText == "Fam"){
            notas[i] = notas[i].innerText = "Fa#m";
        } 

        else if(notas[i].innerText == "Solm"){
            notas[i] = notas[i].innerText = "Sol#m";
        } 

        else if(notas[i].innerText == "Lam"){
            notas[i] = notas[i].innerText = "La#m";
        } 

        else if(notas[i].innerText == "Sim"){
            notas[i] = notas[i].innerText = "Dom";
        }
        
        else if(notas[i].innerText == "Do#m"){
            notas[i] = notas[i].innerText = "Rem";
        }

        else if(notas[i].innerText == "Re#m"){
            notas[i] = notas[i].innerText = "Mim";
        }

        else if(notas[i].innerText == "Fa#m"){
            notas[i] = notas[i].innerText = "Solm";
        } 

        else if(notas[i].innerText == "Sol#m"){
            notas[i] = notas[i].innerText = "Lam";
        } 

        else if(notas[i].innerText == "La#m"){
            notas[i] = notas[i].innerText = "Sim";
        }

        if(notas[i].innerText == "DoM"){
            notas[i] = notas[i].innerText = "Do#M";
        } 
        
        else if(notas[i].innerText == "ReM"){
            notas[i] = notas[i].innerText = "Re#M";
        }

        else if(notas[i].innerText == "MiM"){
            notas[i] = notas[i].innerText = "FaM";
        } 

        else if(notas[i].innerText == "FaM"){
            notas[i] = notas[i].innerText = "Fa#M";
        } 

        else if(notas[i].innerText == "SolM"){
            notas[i] = notas[i].innerText = "Sol#M";
        } 

        else if(notas[i].innerText == "LaM"){
            notas[i] = notas[i].innerText = "La#M";
        } 

        else if(notas[i].innerText == "SiM"){
            notas[i] = notas[i].innerText = "DoM";
        }
        
        else if(notas[i].innerText == "Do#M"){
            notas[i] = notas[i].innerText = "ReM";
        }

        else if(notas[i].innerText == "Re#M"){
            notas[i] = notas[i].innerText = "MiM";
        }

        else if(notas[i].innerText == "Fa#M"){
            notas[i] = notas[i].innerText = "SolM";
        } 

        else if(notas[i].innerText == "Sol#M"){
            notas[i] = notas[i].innerText = "LaM";
        } 

        else if(notas[i].innerText == "La#M"){
            notas[i] = notas[i].innerText = "SiM";
        }
        
      }
}

function cambiarMenos(){
    let notas = document.querySelector("body > pre").getElementsByClassName("nota");
    
    for (let i in notas) {
        if(notas[i].innerText == "Do"){
            notas[i] = notas[i].innerText = "Si";
        } 
        
        else if(notas[i].innerText == "Re"){
            notas[i] = notas[i].innerText = "Do#";
        }

        else if(notas[i].innerText == "Mi"){
            notas[i] = notas[i].innerText = "Re#";
        } 

        else if(notas[i].innerText == "Fa"){
            notas[i] = notas[i].innerText = "Mi";
        } 

        else if(notas[i].innerText == "Sol"){
            notas[i] = notas[i].innerText = "Fa#";
        } 

        else if(notas[i].innerText == "La"){
            notas[i] = notas[i].innerText = "Sol#";
        } 

        else if(notas[i].innerText == "Si"){
            notas[i] = notas[i].innerText = "La#";
        }
        
        else if(notas[i].innerText == "Do#"){
            notas[i] = notas[i].innerText = "Do";
        }

        else if(notas[i].innerText == "Re#"){
            notas[i] = notas[i].innerText = "Re";
        }

        else if(notas[i].innerText == "Fa#"){
            notas[i] = notas[i].innerText = "Fa";
        } 

        else if(notas[i].innerText == "Sol#"){
            notas[i] = notas[i].innerText = "Sol";
        } 

        else if(notas[i].innerText == "La#"){
            notas[i] = notas[i].innerText = "La";
        }

        if(notas[i].innerText == "Dom"){
            notas[i] = notas[i].innerText = "Sim";
        } 
        
        else if(notas[i].innerText == "Rem"){
            notas[i] = notas[i].innerText = "Do#m";
        }

        else if(notas[i].innerText == "Mim"){
            notas[i] = notas[i].innerText = "Re#m";
        } 

        else if(notas[i].innerText == "Fam"){
            notas[i] = notas[i].innerText = "Mim";
        } 

        else if(notas[i].innerText == "Solm"){
            notas[i] = notas[i].innerText = "Fa#m";
        } 

        else if(notas[i].innerText == "Lam"){
            notas[i] = notas[i].innerText = "Sol#m";
        } 

        else if(notas[i].innerText == "Sim"){
            notas[i] = notas[i].innerText = "La#m";
        }
        
        else if(notas[i].innerText == "Do#m"){
            notas[i] = notas[i].innerText = "Dom";
        }

        else if(notas[i].innerText == "Re#m"){
            notas[i] = notas[i].innerText = "Rem";
        }

        else if(notas[i].innerText == "Fa#m"){
            notas[i] = notas[i].innerText = "Fam";
        } 

        else if(notas[i].innerText == "Sol#m"){
            notas[i] = notas[i].innerText = "Solm";
        } 

        else if(notas[i].innerText == "La#m"){
            notas[i] = notas[i].innerText = "Lam";
        }

        if(notas[i].innerText == "DoM"){
            notas[i] = notas[i].innerText = "SiM";
        } 
        
        else if(notas[i].innerText == "ReM"){
            notas[i] = notas[i].innerText = "Do#M";
        }

        else if(notas[i].innerText == "MiM"){
            notas[i] = notas[i].innerText = "Re#M";
        } 

        else if(notas[i].innerText == "FaM"){
            notas[i] = notas[i].innerText = "MiM";
        } 

        else if(notas[i].innerText == "SolM"){
            notas[i] = notas[i].innerText = "Fa#M";
        } 

        else if(notas[i].innerText == "LaM"){
            notas[i] = notas[i].innerText = "Sol#M";
        } 

        else if(notas[i].innerText == "SiM"){
            notas[i] = notas[i].innerText = "La#M";
        }
        
        else if(notas[i].innerText == "Do#M"){
            notas[i] = notas[i].innerText = "DoM";
        }

        else if(notas[i].innerText == "Re#M"){
            notas[i] = notas[i].innerText = "ReM";
        }

        else if(notas[i].innerText == "Fa#M"){
            notas[i] = notas[i].innerText = "FaM";
        } 

        else if(notas[i].innerText == "Sol#M"){
            notas[i] = notas[i].innerText = "SolM";
        } 

        else if(notas[i].innerText == "La#M"){
            notas[i] = notas[i].innerText = "LaM";
        }
        
      }
}


function cambiarNotas(){
    let cambiar = document.querySelector("#cambiarNota");
    let NotaOriginal = document.querySelector("body > pre").getElementsByClassName("nota");
    let valoresMayores =   {do: "1", re: "2", mi:"3", fa:"4", sol:"5", la:"6", si:"7"};
    let valoresSostenidos = {dosos: "8", resos:"9", misos:"10", fasos:"11", solsos:"12", lasos:"13"};
    let valoresMenores =  {dom: "14", rem: "15", mim:"16", fam:"17", solm:"18", lam:"19", sim:"20"};
    //NotaOriginal[0].innerText
    //cambiar.value == "do"
    //valores[0].key = "do#";
    //valores[0].value = "8";

    if(cambiar.value == "do" || cambiar.value == "re" || cambiar.value == "mi" || cambiar.value == "fa" || cambiar.value == "sol" || cambiar.value == "la" || cambiar.value == "si"){
        alert("Para emocion, todavia no esta programada esa parte :)");
    }

    
}


function abrirDo(){
    let nota = document.getElementById("imagenNotas");
    nota.src = "img/do.png";
    document.getElementById("vent").style.display = "block";
}

function abrirRe(){
    let nota = document.getElementById("imagenNotas");
    nota.src = "img/re.png";
    document.getElementById("vent").style.display = "block";
}

function abrirMi(){
    let nota = document.getElementById("imagenNotas");
    nota.src = "img/mi.png";
    document.getElementById("vent").style.display = "block";
}

function abrirFa(){
    let nota = document.getElementById("imagenNotas");
    nota.src = "img/fa.png";
    document.getElementById("vent").style.display = "block";
}

function abrirSol(){
    let nota = document.getElementById("imagenNotas");
    nota.src = "img/sol.png";
    document.getElementById("vent").style.display = "block";
}

function abrirLa(){
    let nota = document.getElementById("imagenNotas");
    nota.src = "img/la.png";
    document.getElementById("vent").style.display = "block";
}

function cerrar(){
    document.getElementById("vent").style.display = "none";
}
