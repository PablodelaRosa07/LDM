// ======================================
// EJEMPLO DE VALIDACIÓN COMPLETA
// ======================================

const form = document.querySelector("#registro");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const usuario = document.querySelector("#usuario").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if(usuario === ""){
        alert("El usuario es obligatorio");
        return;
    }

    if(email === ""){
        alert("El email es obligatorio");
        return;
    }

    if(password.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    console.log("Formulario validado correctamente");
});
