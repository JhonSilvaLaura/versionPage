const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: '# of Votes',//etique para el conjunto de datos
            data: [12, 19, 3, 5, 2, 3], //cantidad k va haber en la columna 
            backgroundColor: [ // color de fondo
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [ //los colores del border
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1 //estable el grosor del borde del grafico
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true  //el eje comienza en 0
            }
        }
    }
});

/* efecto para los retos carrusel */

let items = document.querySelectorAll('.slider .item');  //selecciona elementos del html
let next = document.getElementById('next'); //selecciona el boton siguiente
let prev = document.getElementById('prev'); // selecciona el boto retroceder

let active = 0;// Inicializa el índice del elemento activo (el que se muestra en primer plano).
function loadShow() {
    let stt = 0;
    // Configura el elemento activo (visible) actual.
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1; // Asegura que el elemento activo esté en la parte superior.
    items[active].style.filter = 'none'; // Elimina cualquier filtro aplicado al elemento activo.
    items[active].style.opacity = 1; // Establece la opacidad del elemento activo al máximo.

    // Configura los elementos a la derecha del activo.
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(160px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt; // Coloca los elementos a la derecha detrás del activo.
        items[i].style.filter = 'blur(5px)'; // Aplica un desenfoque.
        items[i].style.opacity = stt > 2 ? 0 : 0.6; // Reduce la opacidad de los elementos según su posición.
    }

    stt = 0; // Reinicia el contador para los elementos a la izquierda.

    // Configura los elementos a la izquierda del activo.
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt; // Coloca los elementos a la izquierda detrás del activo.
        items[i].style.filter = 'blur(5px)'; // Aplica un desenfoque.
        items[i].style.opacity = stt > 2 ? 0 : 0.6; // Reduce la opacidad de los elementos según su posición.
    }
}
loadShow(); // Llama a la función para configurar la vista inicial del slider.
next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active; // Incrementa el índice activo si hay más elementos.
    loadShow(); // Vuelve a cargar la vista del slider.
}
prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active; // Decrementa el índice activo si no está en el primer elemento.
    loadShow(); // Vuelve a cargar la vista del slider.
}


/* menu de hamburguesa */
hamburguesa = document.querySelector('.hamburguesa');
hamburguesa.onclick = function () {
    navBar = document.querySelector('nav');
    navBar.classList.toggle("active");
}