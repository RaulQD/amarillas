
window.onload = function () {
  document.body.classList.remove("container");
  console.log("Iniciando script de reproducción de audio");

  const audio = document.getElementById('background-music');

  // Verifica si el elemento de audio se encontró correctamente
  if (!audio) {
    console.error("El elemento de audio no se encontró en el DOM.");
    return;
  }

  const startTime = 0;
  const endTime = 80;
  function playSegment() {
    audio.currentTime = startTime;
    // REPRODUCIR LA MUSICA
    audio.play().catch(error => {
      console.error("Error al reproducir la música", error);
    });
    if (audio.currentTime >= endTime) {
      audio.pause(); // Pausar el audio al alcanzar el final del segmento
      playSegment(); // Repetir el segmento
    }
  }


  playSegment();
}