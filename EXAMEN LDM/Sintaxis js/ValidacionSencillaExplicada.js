// ============================================
// MEGA-CHULETA DE VALIDACIÓN DE FORMULARIOS JS
// ============================================

// ----------------------------
// 1️⃣ SELECCIÓN DE ELEMENTOS
// ----------------------------
const formulario = document.querySelector(".formulario"); // Formulario
const botonEnviar = document.querySelector(".boton-enviar"); // Botón de envío
const mensajeExito = document.getElementById("mensaje-exito"); // Mensaje de éxito

// Inputs a validar
const inputs = [
  document.getElementById("usuario"),
  document.getElementById("email"),
  document.getElementById("password"),
  document.getElementById("confirmar_password"),
  document.getElementById("telefono"),
  document.getElementById("dni")
];

// Array booleano para llevar control de campos válidos
let validos = new Array(inputs.length).fill(false);

// Desactivar botón al inicio
botonEnviar.disabled = true;

// ----------------------------
// 2️⃣ FUNCIONES DE VALIDACIÓN
// ----------------------------

// Validar usuario: solo letras, números, _, 4-16 caracteres
function validarUsuario(usuario) {
  const regex = /^[a-zA-Z0-9_]{4,16}$/;
  return regex.test(usuario);
}

// Validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validar contraseña fuerte: 8+ caracteres, mayúscula, minúscula, número, símbolo
function validarPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

// Confirmar contraseña
function confirmarPassword(pass1, pass2) {
  return pass1 === pass2;
}

// Validar teléfono español: 9 dígitos, empieza 6-9
function validarTelefono(telefono) {
  const regex = /^[6789]\d{8}$/;
  return regex.test(telefono);
}

// Validar DNI español: 8 números + letra
function validarDNI(dni) {
  const regex = /^\d{8}[A-Z]$/i;
  return regex.test(dni);
}

// ----------------------------
// 3️⃣ FUNCIONES DE MANEJO DE ERRORES
// ----------------------------

// Obtener el <span> siguiente al input para mostrar error
function obtenerSpan(input) {
  return input.nextElementSibling;
}

// Validar un input específico
function validarCampo(input, index) {
  const span = obtenerSpan(input);
  let mensajeError = "";

  mensajeExito.style.display = "none"; // Ocultar mensaje éxito al editar

  // Validaciones según el input
  switch(input.id) {
    case "usuario":
      if (!validarUsuario(input.value)) mensajeError = "Usuario inválido (4-16 caracteres, letras/números/_)";
      break;
    case "email":
      if (!validarEmail(input.value)) mensajeError = "Email inválido";
      break;
    case "password":
      if (!validarPassword(input.value)) mensajeError = "Contraseña débil (mínimo 8, mayúscula, número, símbolo)";
      break;
    case "confirmar_password":
      const pass = document.getElementById("password").value;
      if (!confirmarPassword(pass, input.value)) mensajeError = "Las contraseñas no coinciden";
      break;
    case "telefono":
      if (!validarTelefono(input.value)) mensajeError = "Teléfono inválido (9 dígitos, empieza 6-9)";
      break;
    case "dni":
      if (!validarDNI(input.value)) mensajeError = "DNI inválido (8 números + letra)";
      break;
  }

  // Mostrar u ocultar error
  if (mensajeError !== "") {
    input.classList.add("invalid"); // Añadir clase para resaltar error
    span.textContent = mensajeError; // Mostrar mensaje
    validos[index] = false;
  } else {
    input.classList.remove("invalid");
    span.textContent = "";
    validos[index] = true;
  }

  // Validar formulario completo
  validarFormulario();
}

// ----------------------------
// 4️⃣ CONTROL DEL BOTÓN DE ENVÍO
// ----------------------------
function validarFormulario() {
  botonEnviar.disabled = validos.includes(false); // Si hay false, botón desactivado
}

// Escuchar eventos de inputs
inputs.forEach((input, index) => {
  input.addEventListener("input", () => validarCampo(input, index));
  input.addEventListener("change", () => validarCampo(input, index));
});

// ----------------------------
// 5️⃣ ENVÍO DEL FORMULARIO
// ----------------------------
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar envío real

  if (!validos.includes(false)) {
    mensajeExito.textContent = "Formulario enviado con éxito 🎉";
    mensajeExito.style.display = "inline-block";

    formulario.reset();   // Limpiar formulario
    validos.fill(false);  // Resetar array de validación
    botonEnviar.disabled = true;
  }
});

// ============================================
// RECURSOS CLAVE EN ESTA MEGA-CHULETA
// ============================================
// - querySelector / getElementById → seleccionar elementos
// - addEventListener → escuchar eventos
// - preventDefault → evitar comportamiento por defecto
// - value → obtener valor de input
// - trim() → eliminar espacios al inicio y final
// - length → comprobar longitud de string
// - classList.add / remove → manejar clases CSS
// - nextElementSibling → obtener elemento para mostrar error
// - appendChild / createElement → manipular DOM dinámico
// - Array.includes → comprobar si algún campo es inválido
// - regex.test() → validar patrones (email, teléfono, DNI, usuario, contraseña)
// - reset() → limpiar todos los inputs de formulario