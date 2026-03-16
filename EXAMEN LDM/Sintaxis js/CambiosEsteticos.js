// ============================================
// RECURSOS PARA CAMBIOS ESTÉTICOS DINÁMICOS
// ============================================

// Selección de elementos
const formulario = document.querySelector(".formulario");
const inputs = formulario.querySelectorAll("input");
const botonEnviar = formulario.querySelector(".boton-enviar");

// ----------------------------
// 1️⃣ CAMBIAR CLASES SEGÚN VALIDACIÓN
// ----------------------------

// Podemos usar clases CSS predefinidas para marcar errores o campos correctos
function aplicarEstilos(input, esValido) {
    if (esValido) {
        // Quitar clase de error y añadir clase de válido
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

// Ejemplo de uso:
// aplicarEstilos(input, true);  // campo válido → verde
// aplicarEstilos(input, false); // campo inválido → rojo

// ----------------------------
// 2️⃣ CAMBIAR ESTILOS DIRECTAMENTE CON JS
// ----------------------------

// Podemos modificar propiedades CSS directamente
function estilosDirectos(input, esValido) {
    if (esValido) {
        input.style.borderColor = "green";  // borde verde
        input.style.backgroundColor = "#e0ffe0"; // fondo claro
    } else {
        input.style.borderColor = "red";    // borde rojo
        input.style.backgroundColor = "#ffe0e0"; // fondo rosa claro
    }
}

// ----------------------------
// 3️⃣ MOSTRAR / OCULTAR MENSAJES DINÁMICOS
// ----------------------------

function mostrarMensaje(input, mensaje) {
    const span = input.nextElementSibling; // suponemos un <span> al lado del input
    span.textContent = mensaje;            // mostrar mensaje
    if (mensaje) {
        span.style.display = "inline-block";
        span.style.color = "red";
    } else {
        span.style.display = "none";
    }
}

// ----------------------------
// 4️⃣ CAMBIOS EN BOTÓN SEGÚN VALIDACIÓN
// ----------------------------

function actualizarBoton() {
    const todosValidos = Array.from(inputs).every(input => input.classList.contains("valid"));
    botonEnviar.disabled = !todosValidos;

    if (todosValidos) {
        botonEnviar.style.backgroundColor = "#4CAF50"; // verde si listo para enviar
        botonEnviar.style.cursor = "pointer";
    } else {
        botonEnviar.style.backgroundColor = "#ccc"; // gris si deshabilitado
        botonEnviar.style.cursor = "not-allowed";
    }
}

// ----------------------------
// 5️⃣ CAMBIOS CON ANIMACIONES
// ----------------------------

// Podemos animar un input cuando hay error
function animarError(input) {
    input.style.transition = "transform 0.1s";
    input.style.transform = "translateX(10px)";
    setTimeout(() => input.style.transform = "translateX(0)", 100);
}

// ----------------------------
// 6️⃣ EJEMPLO COMPLETO DE VALIDACIÓN + ESTILO
// ----------------------------

inputs.forEach(input => {
    input.addEventListener("input", () => {
        const esValido = input.value.trim().length > 0; // simple ejemplo: no vacío
        aplicarEstilos(input, esValido);               // cambiar clases
        estilosDirectos(input, esValido);             // cambiar colores
        mostrarMensaje(input, esValido ? "" : "Campo obligatorio"); // mostrar mensaje
        if (!esValido) animarError(input);            // animar error
        actualizarBoton();                             // actualizar botón
    });
});