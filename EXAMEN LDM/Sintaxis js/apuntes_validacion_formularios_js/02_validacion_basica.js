// ======================================
// VALIDACIÓN BÁSICA DE CAMPOS
// ======================================

const formulario = document.querySelector("#form");
const nombre = document.querySelector("#nombre");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    // Validar campo vacío
    if(nombre.value === ""){
        alert("El nombre es obligatorio");
        return;
    }

    console.log("Formulario válido");
});

// .value obtiene el valor del input
// .trim() elimina espacios
if(nombre.value.trim() === ""){
    console.log("Campo vacío");
}
