console.log("Sistema de validación activo");

const formulario = document.getElementById('registroForm');
const botonEnviar = document.getElementById('enviar');

// El botón empieza desactivado al cargar la página
botonEnviar.setAttribute('disabled', 'true');
botonEnviar.style.backgroundColor = '#ccc';

const camposValidos = {
    fname: false, dni: false, email: false, edad: false,
    fecha: false, pass: false, tel: false, cars: false,
    cp: false, terms: false
};

formulario.addEventListener('input', (e) => {
    validarCampo(e.target.id, e.target.value);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // Aquí es donde procesa los datos
    console.log("Formulario validado y envío detenido. Datos listos:", new FormData(formulario));
    alert("El formulario ha sido enviado.");
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

    if (errorSpan) {
        errorSpan.style.display = esValido ? 'none' : 'block';
    }
    
    const input = document.getElementById(id);
    if (input) {
        input.style.borderColor = esValido ? 'green' : 'red';
    }

    verificarFormulario();
}

function verificarFormulario() {
    const todoCorrecto = Object.values(camposValidos).every(valor => valor === true);
    
    if (todoCorrecto) {
        botonEnviar.removeAttribute('disabled');
        botonEnviar.style.backgroundColor = '#4CAF50';
    } else {
        botonEnviar.setAttribute('disabled', 'true');
        botonEnviar.style.backgroundColor = '#ccc';
    }
}