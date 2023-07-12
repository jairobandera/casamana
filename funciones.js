function imprimir(){
    print();
}

// Función para eliminar todos los datos del Local Storage
function eliminarLocalStorage() {
    localStorage.clear();
}

// Función para buscar y mostrar los datos almacenados en el Local Storage
function mostrarDatosLocalStorage() {
    // Obtener los datos del Local Storage
    var datos = localStorage.getItem('divContent');
  
    // Verificar si hay datos almacenados
    if (datos) {
      // Crear el elemento <div>
      var divTemporal = document.createElement('div');

      // Establecer las clases CSS
      divTemporal.className = 'list-group myUL';

      // Establecer el estilo inline
      divTemporal.style.width = '45%';
  
      // Asignar los datos del Local Storage al contenido del div temporal
      divTemporal.innerHTML = datos;
  
      // Obtener el elemento <div> deseado
      var divAlmacenado = divTemporal.firstChild;
  
      // Agregar el elemento <div> al documento
      document.body.appendChild(divAlmacenado);
    }
  }
  
  // Llamar a la función para mostrar los datos del Local Storage
  mostrarDatosLocalStorage();
  

function guardarCanciones(){
    let cancion = document.getElementById("buscar").value;
    cancion = cancion.replace(/ /g, "").toLowerCase();

    if(cancion == 'enlosmontes'){
        // Crear el elemento <div>
        var div = document.createElement('div');

        // Establecer las clases CSS
        div.className = 'list-group myUL';

        // Establecer el estilo inline
        div.style.width = '45%';

        // Crear el elemento <a>
        var link = document.createElement('a');

        // Establecer el atributo href
        link.href = 'plantillas/enlosmontes.html';

        // Establecer las clases CSS
        link.className = 'list-group-item list-group-item-action text-center';

        // Establecer los estilos inline
        link.style.backgroundColor = '#198754';
        link.style.marginBottom = '5px';
        link.style.marginLeft = '5px';
        link.style.color = 'white';

        // Establecer el contenido del enlace
        link.innerHTML = 'En los montes';

        // Agregar el enlace al div
        div.appendChild(link);

        // Agregar el div al documento
        document.body.appendChild(div);

        // Obtener el elemento <input> por su ID
        var input = document.getElementById('buscar');

        // Dejar el valor del input vacío
        input.value = '';

        // Guardar el contenido del <div> en el Local Storage
        localStorage.setItem('divContent', div.innerHTML);
    }
    
}


function buscarCancion(){
    let cancion = document.getElementById("buscar").value;
    cancion = cancion.replace(/ /g, "").toLowerCase();

    if(cancion == 'enlosmontes'){
        location.href ="plantillas/enlosmontes.html";
        }else if(cancion == 'medeleitoenti'){
          location.href="plantillas/medeleitoenti.html";
        }else if(cancion == 'unadorador'){
            location.href="plantillas/unadorador.html";
        }else if(cancion == 'haylibertad'){
            location.href="plantillas/haylibertad.html";
        }else if(cancion == 'queseabraelcielo'){
            location.href="plantillas/queseabraelcielo.html";
        }else if(cancion == 'cuanbelloeselseñor'){
            location.href="plantillas/cuanbelloeselsenior.html";
        }else if(cancion == 'algoestacayendoaqui'){
            location.href="plantillas/estacayendo.html";
        }else if(cancion == 'entupresenciadanzamos'){
            location.href="plantillas/entupresenciadanzamos.html";
        }else if(cancion == 'libresoy'){
            location.href="plantillas/libresoy.html";
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
            }else if(cancion == 'haylibertad'){
                location.href="plantillas/haylibertad.html";
            }else if(cancion == 'queseabraelcielo'){
                location.href="plantillas/queseabraelcielo.html";
            }else if(cancion == 'cuanbelloeselseñor'){
                location.href="plantillas/cuanbelloeselsenior.html";
            }else if(cancion == 'algoestacayendoaqui'){
                location.href="plantillas/estacayendo.html";
            }else if(cancion == 'entupresenciadanzamos'){
                location.href="plantillas/entupresenciadanzamos.html";
            }else if(cancion == 'libresoy'){
                location.href="plantillas/libresoy.html";
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
        
        else if(notas[i].innerText == "Do7"){
            notas[i] = notas[i].innerText = "Do#7";
        }
        
        else if(notas[i].innerText == "Re"){
            notas[i] = notas[i].innerText = "Re#";
        }

        else if(notas[i].innerText == "Re7"){
            notas[i] = notas[i].innerText = "Re#7";
        }

        else if(notas[i].innerText == "Mi"){
            notas[i] = notas[i].innerText = "Fa";
        }
        
        else if(notas[i].innerText == "Mi7"){
            notas[i] = notas[i].innerText = "Fa7";
        }

        else if(notas[i].innerText == "Fa"){
            notas[i] = notas[i].innerText = "Fa#";
        }
        
        else if(notas[i].innerText == "Fa7"){
            notas[i] = notas[i].innerText = "Fa#7";
        }

        else if(notas[i].innerText == "Sol"){
            notas[i] = notas[i].innerText = "Sol#";
        }
        
        else if(notas[i].innerText == "Sol7"){
            notas[i] = notas[i].innerText = "Sol#7";
        }

        else if(notas[i].innerText == "La"){
            notas[i] = notas[i].innerText = "La#";
        }
        
        else if(notas[i].innerText == "La7"){
            notas[i] = notas[i].innerText = "La#7";
        }

        else if(notas[i].innerText == "Si"){
            notas[i] = notas[i].innerText = "Do";
        }

        else if(notas[i].innerText == "Si7"){
            notas[i] = notas[i].innerText = "Do7";
        }
        
        else if(notas[i].innerText == "Do#"){
            notas[i] = notas[i].innerText = "Re";
        }

        else if(notas[i].innerText == "Do#7"){
            notas[i] = notas[i].innerText = "Re7";
        }

        else if(notas[i].innerText == "Re#"){
            notas[i] = notas[i].innerText = "Mi";
        }

        else if(notas[i].innerText == "Re#7"){
            notas[i] = notas[i].innerText = "Mi7";
        }

        else if(notas[i].innerText == "Fa#"){
            notas[i] = notas[i].innerText = "Sol";
        }
        
        else if(notas[i].innerText == "Fa#7"){
            notas[i] = notas[i].innerText = "Sol7";
        }

        else if(notas[i].innerText == "Sol#"){
            notas[i] = notas[i].innerText = "La";
        }
        
        else if(notas[i].innerText == "Sol#7"){
            notas[i] = notas[i].innerText = "La7";
        }

        else if(notas[i].innerText == "La#"){
            notas[i] = notas[i].innerText = "Si";
        }

        else if(notas[i].innerText == "La#7"){
            notas[i] = notas[i].innerText = "Si7";
        }

        if(notas[i].innerText == "Dom"){
            notas[i] = notas[i].innerText = "Do#m";
        } 

        if(notas[i].innerText == "Dom7"){
            notas[i] = notas[i].innerText = "Do#m7";
        }
        
        else if(notas[i].innerText == "Rem"){
            notas[i] = notas[i].innerText = "Re#m";
        }

        else if(notas[i].innerText == "Rem7"){
            notas[i] = notas[i].innerText = "Re#m7";
        }

        else if(notas[i].innerText == "Mim"){
            notas[i] = notas[i].innerText = "Fam";
        }
        
        else if(notas[i].innerText == "Mim7"){
            notas[i] = notas[i].innerText = "Fam7";
        }

        else if(notas[i].innerText == "Fam"){
            notas[i] = notas[i].innerText = "Fa#m";
        }
        
        else if(notas[i].innerText == "Fam7"){
            notas[i] = notas[i].innerText = "Fa#m7";
        }

        else if(notas[i].innerText == "Solm"){
            notas[i] = notas[i].innerText = "Sol#m";
        }
        
        else if(notas[i].innerText == "Solm7"){
            notas[i] = notas[i].innerText = "Sol#m7";
        }

        else if(notas[i].innerText == "Lam"){
            notas[i] = notas[i].innerText = "La#m";
        } 

        else if(notas[i].innerText == "Lam7"){
            notas[i] = notas[i].innerText = "La#m7";
        }

        else if(notas[i].innerText == "Sim"){
            notas[i] = notas[i].innerText = "Dom";
        }

        else if(notas[i].innerText == "Sim7"){
            notas[i] = notas[i].innerText = "Dom7";
        }
        
        else if(notas[i].innerText == "Do#m"){
            notas[i] = notas[i].innerText = "Rem";
        }

        else if(notas[i].innerText == "Do#m7"){
            notas[i] = notas[i].innerText = "Rem7";
        }

        else if(notas[i].innerText == "Re#m"){
            notas[i] = notas[i].innerText = "Mim";
        }

        else if(notas[i].innerText == "Re#m7"){
            notas[i] = notas[i].innerText = "Mim7";
        }

        else if(notas[i].innerText == "Fa#m"){
            notas[i] = notas[i].innerText = "Solm";
        }
        
        else if(notas[i].innerText == "Fa#m7"){
            notas[i] = notas[i].innerText = "Solm7";
        }

        else if(notas[i].innerText == "Sol#m"){
            notas[i] = notas[i].innerText = "Lam";
        }
        
        else if(notas[i].innerText == "Sol#m7"){
            notas[i] = notas[i].innerText = "Lam7";
        }

        else if(notas[i].innerText == "La#m"){
            notas[i] = notas[i].innerText = "Sim";
        }

        else if(notas[i].innerText == "La#m7"){
            notas[i] = notas[i].innerText = "Sim7";
        }
        
      }
}

function cambiarMenos(){
    let notas = document.querySelector("body > pre").getElementsByClassName("nota");
    
    for (let i in notas) {
        if(notas[i].innerText == "Do"){
            notas[i] = notas[i].innerText = "Si";
        } 

        else if(notas[i].innerText == "Do7"){
            notas[i] = notas[i].innerText = "Si7";
        }
        
        else if(notas[i].innerText == "Re"){
            notas[i] = notas[i].innerText = "Do#";
        }

        else if(notas[i].innerText == "Re7"){
            notas[i] = notas[i].innerText = "Do#7";
        }

        else if(notas[i].innerText == "Mi"){
            notas[i] = notas[i].innerText = "Re#";
        }
        
        else if(notas[i].innerText == "Mi7"){
            notas[i] = notas[i].innerText = "Re#7";
        }

        else if(notas[i].innerText == "Fa"){
            notas[i] = notas[i].innerText = "Mi";
        } 

        else if(notas[i].innerText == "Fa7"){
            notas[i] = notas[i].innerText = "Mi7";
        }

        else if(notas[i].innerText == "Sol"){
            notas[i] = notas[i].innerText = "Fa#";
        }
        
        else if(notas[i].innerText == "Sol7"){
            notas[i] = notas[i].innerText = "Fa#7";
        }

        else if(notas[i].innerText == "La"){
            notas[i] = notas[i].innerText = "Sol#";
        } 

        else if(notas[i].innerText == "La7"){
            notas[i] = notas[i].innerText = "Sol#7";
        }

        else if(notas[i].innerText == "Si"){
            notas[i] = notas[i].innerText = "La#";
        }

        else if(notas[i].innerText == "Si7"){
            notas[i] = notas[i].innerText = "La#7";
        }
        
        else if(notas[i].innerText == "Do#"){
            notas[i] = notas[i].innerText = "Do";
        }

        else if(notas[i].innerText == "Do#7"){
            notas[i] = notas[i].innerText = "Do7";
        }

        else if(notas[i].innerText == "Re#"){
            notas[i] = notas[i].innerText = "Re";
        }

        else if(notas[i].innerText == "Re#7"){
            notas[i] = notas[i].innerText = "Re7";
        }

        else if(notas[i].innerText == "Fa#"){
            notas[i] = notas[i].innerText = "Fa";
        } 

        else if(notas[i].innerText == "Fa#7"){
            notas[i] = notas[i].innerText = "Fa7";
        }

        else if(notas[i].innerText == "Sol#"){
            notas[i] = notas[i].innerText = "Sol";
        }
        
        else if(notas[i].innerText == "Sol#7"){
            notas[i] = notas[i].innerText = "Sol7";
        }

        else if(notas[i].innerText == "La#"){
            notas[i] = notas[i].innerText = "La";
        }

        else if(notas[i].innerText == "La#7"){
            notas[i] = notas[i].innerText = "La7";
        }

        if(notas[i].innerText == "Dom"){
            notas[i] = notas[i].innerText = "Sim";
        } 

        if(notas[i].innerText == "Dom7"){
            notas[i] = notas[i].innerText = "Sim7";
        }
        
        else if(notas[i].innerText == "Rem"){
            notas[i] = notas[i].innerText = "Do#m";
        }

        else if(notas[i].innerText == "Rem7"){
            notas[i] = notas[i].innerText = "Do#m7";
        }

        else if(notas[i].innerText == "Mim"){
            notas[i] = notas[i].innerText = "Re#m";
        } 

        else if(notas[i].innerText == "Mim7"){
            notas[i] = notas[i].innerText = "Re#m7";
        }

        else if(notas[i].innerText == "Fam"){
            notas[i] = notas[i].innerText = "Mim";
        }
        
        else if(notas[i].innerText == "Fam7"){
            notas[i] = notas[i].innerText = "Mim7";
        }

        else if(notas[i].innerText == "Solm"){
            notas[i] = notas[i].innerText = "Fa#m";
        }
        
        else if(notas[i].innerText == "Solm7"){
            notas[i] = notas[i].innerText = "Fa#m7";
        }

        else if(notas[i].innerText == "Lam"){
            notas[i] = notas[i].innerText = "Sol#m";
        } 

        else if(notas[i].innerText == "Lam7"){
            notas[i] = notas[i].innerText = "Sol#m7";
        }

        else if(notas[i].innerText == "Sim"){
            notas[i] = notas[i].innerText = "La#m";
        }

        else if(notas[i].innerText == "Sim7"){
            notas[i] = notas[i].innerText = "La#m7";
        }
        
        else if(notas[i].innerText == "Do#m"){
            notas[i] = notas[i].innerText = "Dom";
        }

        else if(notas[i].innerText == "Do#m7"){
            notas[i] = notas[i].innerText = "Dom7";
        }

        else if(notas[i].innerText == "Re#m"){
            notas[i] = notas[i].innerText = "Rem";
        }

        else if(notas[i].innerText == "Re#m7"){
            notas[i] = notas[i].innerText = "Rem7";
        }

        else if(notas[i].innerText == "Fa#m"){
            notas[i] = notas[i].innerText = "Fam";
        } 

        else if(notas[i].innerText == "Fa#m7"){
            notas[i] = notas[i].innerText = "Fam7";
        }

        else if(notas[i].innerText == "Sol#m"){
            notas[i] = notas[i].innerText = "Solm";
        }
        
        else if(notas[i].innerText == "Sol#m7"){
            notas[i] = notas[i].innerText = "Solm7";
        }

        else if(notas[i].innerText == "La#m"){
            notas[i] = notas[i].innerText = "Lam";
        }

        else if(notas[i].innerText == "La#m7"){
            notas[i] = notas[i].innerText = "Lam7";
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
