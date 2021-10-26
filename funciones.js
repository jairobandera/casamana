function cambiarMas(){
    let notas = document.querySelector("body > pre").getElementsByClassName("nota");
    
    for (let i in notas) {
        if(notas[i].innerText == "Do"){
            notas[i] = notas[i].innerText = "Re";
        } 
        
        else if(notas[i].innerText == "Re"){
            notas[i] = notas[i].innerText = "Mi";
        }

        else if(notas[i].innerText == "Mi"){
            notas[i] = notas[i].innerText = "Fa";
        } 

        else if(notas[i].innerText == "Fa"){
            notas[i] = notas[i].innerText = "Sol";
        } 

        else if(notas[i].innerText == "Sol"){
            notas[i] = notas[i].innerText = "La";
        } 

        else if(notas[i].innerText == "La"){
            notas[i] = notas[i].innerText = "Si";
        } 

        else if(notas[i].innerText == "Si"){
            notas[i] = notas[i].innerText = "Do";
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
            notas[i] = notas[i].innerText = "Do";
        }

        else if(notas[i].innerText == "Mi"){
            notas[i] = notas[i].innerText = "Re";
        } 

        else if(notas[i].innerText == "Fa"){
            notas[i] = notas[i].innerText = "Mi";
        } 

        else if(notas[i].innerText == "Sol"){
            notas[i] = notas[i].innerText = "Fa";
        } 

        else if(notas[i].innerText == "La"){
            notas[i] = notas[i].innerText = "Sol";
        } 

        else if(notas[i].innerText == "Si"){
            notas[i] = notas[i].innerText = "La";
        } 
        
      }
}

  function handleSelect(elm){
     window.location = elm.value+".html";
  }
