document.addEventListener("DOMContentLoaded", () => {
    const anuncio = document.getElementById('anuncio');

    const checkImportantDay = () => {
        fetch('http://localhost:3001/dia-importante')
            .then(response => {
                if (!response.ok) throw new Error('Error en la respuesta del servidor');
                return response.json();
            })
            .then(data => {
                if (data.length > 0) {
                    const { nombre, descripcion } = data[0];
                    anuncio.innerHTML = `<strong>Hoy es ${nombre}:</strong> ${descripcion} <button id="cerrar-anuncio">Cerrar</button>`;
                    anuncio.style.display = 'block';

                    document.getElementById('cerrar-anuncio').addEventListener('click', () => {
                        anuncio.style.display = 'none';
                    });
                } else {
                    anuncio.style.display = 'none';
                }
            })
            .catch(error => console.error('Error al obtener el día importante:', error));
    };

    checkImportantDay();
    // Configura la actualización automática si es necesario.
    // setInterval(checkImportantDay, 3600000); // Cada 1 hora
});
