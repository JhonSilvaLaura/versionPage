/* // Espera a que la página cargue completamente
window.onload = function() {
    // Configura el tiempo que deseas que el loader esté visible (en milisegundos)
    //const loaderDuration = 5000; // 3000 ms = 3 segundos

    // Después del tiempo especificado, oculta el loader y muestra el contenido
/* setTimeout(() => {
        document.getElementById('loader').style.display = 'none'; // Oculta el loader
        document.querySelector('.as').style.display = 'block'; // Muestra el contenido
    }, loaderDuration);

}*/
// Simular un tiempo de carga
window.onload = function() {
    // Esperar 2 segundos antes de mostrar el contenido
    setTimeout(function() {
        // Ocultar el loader
        document.getElementById('loader').style.display = 'none';
        // Mostrar el contenido
        document.getElementById('content').style.display = 'block';
    }, 2000); // 2000 milisegundos = 2 segundos
};

/* efecto letra */
/* var typed = new typed (".efecto",{
    strings : ["Crecemos juntos"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
});
 */
const typed = new Typed('.typed', {
	strings: [
		'<i class="colocar">Juntos</i>',
		'<i class="colocar">Economicamente</i>',
	],
	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

/* menu amburguesa */
hamburguesa = document.querySelector('.hamburguesa');// me selecciona una clase del archivo html
hamburguesa.onclick = function(){// permite k se le haga click a icono
	navBar = document.querySelector('nav'); //selecciona la etiqueta nav del html
	navBar.classList.toggle("active"); // anade una clase
}


document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const celebracionesContainer = document.getElementById('celebraciones-container');

    // Obtener celebraciones del servidor
    fetch('/celebraciones')
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                data.forEach((celebracion) => {
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <h3>${celebracion.nombre}</h3>
                        <p>${celebracion.descripcion}</p>
                    `;
                    celebracionesContainer.appendChild(div);
                });
                popup.classList.remove('hidden'); // Mostrar el popup
            }
        })
        .catch((error) => console.error('Error al cargar celebraciones:', error));

    // Cerrar la ventana emergente
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
