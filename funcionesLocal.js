// Función para eliminar todos los datos del Local Storage
function eliminarLocalStorage() {
    localStorage.clear();
}

// Función para buscar y mostrar los datos almacenados en el Local Storage
function mostrarDatosLocalStorage() {
    // Obtener todos los datos del Local Storage
    var canciones = Object.keys(localStorage).filter(function(clave) {
      return clave.startsWith('casamana');
    }).map(function(clave) {
      return localStorage.getItem(clave);
    });
  
    // Verificar si hay canciones almacenadas y si el elemento con el ID 'contenido' existe
    if (canciones.length > 0 && document.getElementById('contenido')) {
      var padre = document.getElementById('contenido');
  
      // Recorrer todas las canciones
      canciones.forEach(function(cancion) {
        // Crear el elemento <div>
        var divTemporal = document.createElement('div');
  
        // Establecer las clases CSS
        divTemporal.className = 'list-group myUL';
  
        // Establecer el estilo inline
        divTemporal.style.width = '45%';
  
        // Asignar los datos de la canción al contenido del div temporal
        divTemporal.innerHTML = cancion;
  
        // Obtener el elemento <div> deseado
        var divAlmacenado = divTemporal.firstChild;
  
        // Agregar el elemento al padre
        padre.appendChild(divAlmacenado);
      });
    }
  }
  
  // Llamar a la función para mostrar los datos del Local Storage
  mostrarDatosLocalStorage();
  
  

function guardarCanciones(){
    let cancion = document.getElementById("buscar").value;
    cancion = cancion.replace(/ /g, "").toLowerCase();

fetch('plantillas/'+cancion+'.html')
    .then(function(response) {
    if (response.ok) {
        // Crear el elemento <div>
        var div = document.createElement('div');

        // Establecer las clases CSS
        div.className = 'list-group myUL';

        // Establecer el estilo inline
        div.style.width = '45%';

        // Crear el elemento <a>
        var link = document.createElement('a');

        // Establecer el atributo href
        link.href = 'plantillas/'+cancion+'.html';

        // Establecer las clases CSS
        link.className = 'list-group-item list-group-item-action text-center';

        // Establecer los estilos inline
        link.style.backgroundColor = '#198754';
        link.style.marginBottom = '5px';
        link.style.marginLeft = '5px';
        link.style.color = 'white';

        // Establecer el contenido del enlace
        link.innerHTML = document.getElementById("buscar").value;

        // Agregar el enlace al div
        div.appendChild(link);

        // Agregar el div al documento
        document.body.appendChild(div);

        // Obtener el elemento <input> por su ID
        var input = document.getElementById('buscar');

        // Dejar el valor del input vacío
        input.value = '';
        let stor = 'casamana'+cancion;
        // Guardar el contenido del <div> en el Local Storage
        localStorage.setItem(stor, div.innerHTML);
    } else {
        console.log('El documento no existe.');
    }
    })
    .catch(function(error) {
        console.log('Error al cargar el documento:', error);
    });    
}

// Agregar el controlador de eventos al presionar la tecla Enter
document.getElementById("buscar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      guardarCanciones();
    }
  });