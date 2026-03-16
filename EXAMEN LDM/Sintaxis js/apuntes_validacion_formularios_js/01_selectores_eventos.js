// ======================================
// SELECCIONAR FORMULARIOS Y EVENTOS
// ======================================

// Seleccionar el formulario
const formulario = document.querySelector("#miFormulario");

// Seleccionar inputs
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Escuchar el evento submit
formulario.addEventListener("submit", function(event){
    // event.preventDefault() evita que el formulario se envíe
    // para poder validar antes
    event.preventDefault();

    console.log("Formulario enviado (pero interceptado para validar)");
});

// Eventos útiles para validación
emailInput.addEventListener("input", () => {
    console.log("El usuario está escribiendo");
});

passwordInput.addEventListener("blur", () => {
    console.log("El usuario salió del campo");
});
