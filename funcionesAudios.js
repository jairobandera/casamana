function buscarCancionEnCarpeta(cancionSinEspacios) {
    const carpeta = '../mp3'; // Nombre de la carpeta a buscar (en este caso, 'mp3')
    const extension = '.mp3'; // Extensión de las canciones (en este caso, '.mp3')
    const url = carpeta + '/' + cancionSinEspacios + extension; // Construir la URL de la canción dentro de la carpeta "mp3"
  
    return new Promise(function (resolve, reject) {
      // Realizar una petición para verificar si la canción existe
      fetch(url)
        .then(function (response) {
          // Si el estado de la respuesta es 200 (OK), significa que la canción existe
          resolve(response.ok);
  
          // Si es ok entonces agregar al botón con id "play" la función de reproducir la canción
          if (response.ok) {
            var audio = new Audio(url);
            var isPlaying = false; // Variable para rastrear el estado de reproducción
            var playButton = document.getElementById("play");
  
            // Función para cambiar el ícono y el texto del botón
            function togglePlayButton() {
              if (isPlaying) {
                playButton.innerHTML = 'Parar <i class="fas fa-stop"></i>';
              } else {
                playButton.innerHTML = 'Reproducir <i class="fas fa-play"></i>';
              }
            }
  
            // Agregar evento click al botón
            playButton.addEventListener("click", function () {
              if (isPlaying) {
                audio.pause(); // Si está reproduciendo, se detiene
                audio.currentTime = 0; // Reiniciar el tiempo de reproducción
                isPlaying = false;
              } else {
                audio.play(); // Si no está reproduciendo, se inicia la reproducción
                isPlaying = true;
              }
              togglePlayButton();
            });
  
            // Cambiar el ícono y el texto inicial del botón
            togglePlayButton();
          }
        })
        .catch(function (error) {
          // Si ocurre un error en la petición, consideramos que la canción no existe
          resolve(false);
        });
    });
  }
  
  buscarCancionEnCarpeta('libresoy');
  