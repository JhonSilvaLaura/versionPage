/* menu amburguesa */
hamburguesa = document.querySelector('.hamburguesa');// me selecciona una clase del archivo html
hamburguesa.onclick = function(){// permite k se le haga click a icono
	navBar = document.querySelector('nav'); //selecciona la etiqueta nav del html
	navBar.classList.toggle("active"); // anade una clase
}



/*const btnCart = document.querySelector(".container-icon")

const containerCartProducts = document.querySelector(".container-cart-products")
btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle("hidden-cart")
})*/

/* let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSelecionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item) {
    quitarBordes()

    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElemtsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElemtsByTagName("p")[0].innerHTML;

    descripSelecionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML = item.getElemtsByTagName("span")[0].innerHTML;
}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
} */

/* efecto card */
let previewContainer = document.querySelector('.ventana-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.ods-container .ods').forEach(ods => {
    ods.onclick = () =>{
        previewContainer.style.display = 'flex';

        let name = ods.getAttribute('data-name');
        previewBox.forEach(preview=>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});
/* para cerra la ventana */
previewBox.forEach(close=> {
    close.querySelector('.ri-close-line').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display= 'none';
    }
});