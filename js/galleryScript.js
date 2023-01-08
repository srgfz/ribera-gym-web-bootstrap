//*JS para controlar la ventana modal de la galería:
//ELEMENTOS:
const gallery = document.querySelector("#gallery")
const galleryImgs = Array.from(document.querySelectorAll(".gallery__img"))
const imgsModal = Array.from(document.querySelectorAll(".carousel-item"))

//FUNCIONES:
const showModalImg = (ev) => {//Función para activar la imagen del carrusel que haya sido pulsada
    let imgSelected = ev.target
    if (imgSelected.tagName.toUpperCase() === "IMG") {//Si ha pulsado sobre una imagen
        //añado la clase active en correspondiente a la imagen selecionada y la elimino de las demás
        imgsModal.map(img => {
            //Elimino la clase active
            img.classList.remove("active")
            if (imgSelected.getAttribute("SRC") == img.children[0].getAttribute("SRC")) {//Si es la imagen seleccionada y añado la clase active
                img.classList.add("active")
            }
        })
    }
}

//LISTENERS:
gallery.addEventListener("click", showModalImg)
