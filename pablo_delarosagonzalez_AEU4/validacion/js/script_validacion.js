console.log("Sistema de validación activo");

const formulario = document.getElementById('registroForm');
const botonEnviar = document.getElementById('enviar');

// Llevar el seguimiento de qué campos son válidos
const camposValidos = {
    fname: false, dni: false, email: false, edad: false,
    fecha: false, pass: false, tel: false, cars: false,
    cp: false, terms: false
};

// Cambios en todo el formulario
formulario.addEventListener('input', (e) => {
    validarCampo(e.target.id, e.target.value);
});

function validarCampo(id, valor) {
    let esValido = false;

    switch (id) {
        case 'fname':
            esValido = valor.trim().length >= 3;
            break;
        case 'dni':
            const dniRegEx = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
            esValido = dniRegEx.test(valor);
            break;
        case 'email':
            esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
            break;
        case 'edad':
            esValido = valor >= 18 && valor <= 99;
            break;
        case 'fecha':
            esValido = valor !== "";
            break;
        case 'pass':
            esValido = valor.length >= 6;
            break;
        case 'tel':
            esValido = /^[0-9]{9}$/.test(valor);
            break;
        case 'cars':
            esValido = valor !== "";
            break;
        case 'cp':
            esValido = /^[0-9]{5}$/.test(valor);
            break;
        case 'terms':
            esValido = document.getElementById('terms').checked;
            break;
    }

    actualizarEstado(id, esValido);
}

function actualizarEstado(id, esValido) {
    const errorSpan = document.getElementById(`error-${id}`);
    camposValidos[id] = esValido;

    if (esValido) {
        errorSpan.style.display = 'none';
        document.getElementById(id).style.borderColor = 'green';
    } else {
        errorSpan.style.display = 'block';
        document.getElementById(id).style.borderColor = 'red';
    }

    verificarFormulario();
}

function verificarFormulario() {
    // Uso de Every para comprobar si todos los valores del objeto son true
    const todoCorrecto = Object.values(camposValidos).every(valor => valor === true);
    
    if (todoCorrecto) {
        botonEnviar.removeAttribute('disabled');
        botonEnviar.style.backgroundColor = '#4CAF50'; // Feedback visual de habilitado
    } else {
        botonEnviar.setAttribute('disabled', 'true');
        botonEnviar.style.backgroundColor = '#ccc';
    }
}