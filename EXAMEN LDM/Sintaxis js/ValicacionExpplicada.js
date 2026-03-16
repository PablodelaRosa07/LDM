// ============================================
// VALIDACIÓN DE FORMULARIO COMPLETO – EXPLICADO
// ============================================

// ----------------------------
// 1️⃣ SELECCIÓN DE ELEMENTOS DEL DOM
// ----------------------------

// Seleccionamos el formulario por su clase
const formulario = document.querySelector(".formulario-loco");

// Seleccionamos el botón de envío
const botonEnviar = document.querySelector(".boton-enviar-loco");

// Seleccionamos el contenedor donde mostraremos el mensaje de éxito
const mensajeExito = document.getElementById("mensaje-exito");

// Seleccionamos todos los inputs que vamos a validar y los ponemos en un array
const inputs = [
    document.getElementById("usuario"),
    document.getElementById("correo"),
    document.getElementById("password"),
    document.getElementById("fecha_nacimiento"),
    document.getElementById("telefono"),
    document.getElementById("nickname"),
    document.getElementById("rango")
];

// Creamos un array booleano para llevar control de qué campos son válidos
let validos = new Array(inputs.length).fill(false);

// Desactivamos el botón al cargar la página
botonEnviar.disabled = true;

// ----------------------------
// 2️⃣ FUNCIONES DE VALIDACIÓN BÁSICAS
// ----------------------------

// Validar nombre: mínimo 3 caracteres
function validarNombre(nombre) {
    // trim() elimina espacios al inicio y al final
    return nombre.trim().length >= 3;
}

// Validar contraseña: mínimo 6 caracteres
function validarPassword(password) {
    return password.length >= 6;
}

// Calcular edad a partir de la fecha de nacimiento
function calcularEdad(fecha) {
    const hoy = new Date();           // Fecha actual
    const nacimiento = new Date(fecha); // Fecha de nacimiento ingresada
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();

    // Ajuste si el cumpleaños aún no ha ocurrido en este año
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// Validar fecha: mayor o igual a 12 años
function validarFecha(fecha) {
    return calcularEdad(fecha) >= 12;
}

// Validar teléfono: exactamente 9 dígitos
function validarTelefono(telefono) {
    return telefono.length == 9;
}

// ----------------------------
// 3️⃣ FUNCIONES DE MANEJO DE ERRORES
// ----------------------------

// Obtener el <span> que sigue a cada input para mostrar errores
function obtenerSpan(input) {
    return input.nextElementSibling;
}

// Validar un campo específico
function validarCampo(input, index) {
    const span = obtenerSpan(input);  // span donde mostraremos el error
    let mensajeError = "";

    // Ocultamos mensaje de éxito si el usuario vuelve a escribir
    mensajeExito.style.display = "none";

    // 3.1 Validaciones
    if (input.value.trim() === "") {                 // Campo vacío
        mensajeError = "Este campo es obligatorio";
    } else if (input.id == "usuario" && !validarNombre(input.value)) {
        mensajeError = "El nombre debe tener al menos 3 caracteres";
    } else if (input.id === "password" && !validarPassword(input.value)) {
        mensajeError = "La contraseña debe tener al menos 6 caracteres";
    } else if (input.id == "fecha_nacimiento" && !validarFecha(input.value)) {
        mensajeError = "Debes tener al menos 12 años";
    } else if (input.id == "telefono" && !validarTelefono(input.value)){
        mensajeError = "Debe contener 9 dígitos";
    }

    // 3.2 Mostrar u ocultar mensaje de error
    if (mensajeError !== "") {
        input.classList.add("invalid"); // Añadimos clase CSS para resaltar error
        span.textContent = mensajeError; // Mostramos mensaje
        validos[index] = false;          // Marcamos campo como inválido
    } else {
        input.classList.remove("invalid");
        span.textContent = "";
        validos[index] = true;           // Campo válido
    }

    // Validar si el formulario completo se puede enviar
    validarFormulario();
}

// ----------------------------
// 4️⃣ CONTROL DEL BOTÓN DE ENVÍO
// ----------------------------

function validarFormulario() {
    // Si algún campo es false, botón deshabilitado
    botonEnviar.disabled = validos.includes(false);
}

// Escuchamos eventos de cada input para validar al escribir o al cambiar
inputs.forEach((input, index) => {
    input.addEventListener("input", () => validarCampo(input, index));
    input.addEventListener("change", () => validarCampo(input, index));
});

// ----------------------------
// 5️⃣ ENVÍO DEL FORMULARIO
// ----------------------------

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar envío real para poder validar antes

    if (!validos.includes(false)) { // Todos los campos son válidos

        // Mostrar mensaje de éxito
        mensajeExito.textContent = "Formulario enviado, disfruta la magia unicorniana";
        mensajeExito.style.display = "inline-block";

        // Crear una imagen dinámica y añadirla al mensaje
        const img = document.createElement("img");
        img.src = "../images/unicornio.jpeg";
        img.style.width = "170px";
        img.style.verticalAlign = "middle";
        img.style.marginLeft = "10px";
        img.style.position = "fixed";
        img.style.top = "700px";   
        img.style.left = "0";

        mensajeExito.appendChild(img);

        // Animación de la imagen
        animarImagenRectilinea(img);

        // Reset del formulario
        formulario.reset();
        validos.fill(false);
        botonEnviar.disabled = true;
    }
});

// ----------------------------
// 6️⃣ ANIMACIÓN LINEAL DE IMAGEN
// ----------------------------

// Función de timing lineal
function linear(timeFraction) {
  return timeFraction;
}

// Función genérica de animación
function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function anim(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(anim);
    }
  });
}

// Función específica para animar la imagen de forma horizontal
function animarImagenRectilinea(img) {
  const anchoPantalla = window.innerWidth;
  const anchoImagen = img.offsetWidth;

  animate({
    duration: 4000,      // duración de la animación en ms
    timing: linear,       // función de tiempo lineal
    draw(progress) {      // función que mueve la imagen
      const x = -anchoImagen + progress * (anchoPantalla + anchoImagen);
      img.style.transform = `translateX(${x}px)`; // mover en X
    }
  });
}