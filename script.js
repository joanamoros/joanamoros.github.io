document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ELO de Chess.com y actualizar el texto
    fetch('https://api.chess.com/pub/player/johan023/stats')
      .then(response => response.json())
      .then(data => {
        const elo = data.chess_rapid.last.rating; // Por ejemplo, ELO en rápidas
        document.getElementById('chess-elo').innerText = `Chess.com (ELO: ${elo})`;
      })
      .catch(error => console.error('Error al obtener el ELO:', error));
    
    // Redirigir a la página de carreras cuando se hace clic en el enlace
    document.getElementById('mostrar-carreras').addEventListener('click', function(e) {
      e.preventDefault(); // Evitar el comportamiento por defecto del enlace
      
      // Redirigir a carreras.html
      window.location.href = "carreras.html";  // Redirige a la página carreras.html
    });
  });
  
