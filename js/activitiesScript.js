//*Script para ocultar las actividades de la página prices.html (si no las actividades estarían ocultas pero ocuparían espacio debajo del acordeón de precios)
//ELEMENTOS:
const btns = document.getElementById("pills-tab")
const activities = document.getElementById("activities")

//FUNCIONES:
const displayActivities = (ev) => {//Función para mostrar y ocultar las actividades
    let btn = ev.target
    if (btn.tagName.toUpperCase() === "BUTTON") {//Si pulsa sobre el botón
        if (btn.id.toUpperCase() === "ACTIVITIESBTN") {//Si pulsa sobre el botón de actividades muestro las actividades
            activities.classList.remove("d-none")
        } else {//Si pulsa sobre el botón de precios oculto las actividades para que no ocupen espacio
            activities.classList.add("d-none")
        }
    }
}

//LISTENERS:
btns.addEventListener("click", displayActivities)