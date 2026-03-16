// ======================================
// MOSTRAR MENSAJES DE ERROR EN EL DOM
// ======================================

function mostrarError(input, mensaje){

    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add("error");

    input.parentElement.appendChild(error);
}

// Limpiar errores anteriores
function limpiarErrores(){

    const errores = document.querySelectorAll(".error");

    errores.forEach(e => e.remove());
}

// Ejemplo
limpiarErrores();
mostrarError(document.querySelector("#email"), "Email incorrecto");
