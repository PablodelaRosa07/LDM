// ======================================
// VALIDAR EMAIL CON REGEX
// ======================================

const emailInput = document.querySelector("#email");

function validarEmail(email){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

// Uso
const email = emailInput.value;

if(validarEmail(email)){
    console.log("Email válido");
}else{
    console.log("Email inválido");
}
