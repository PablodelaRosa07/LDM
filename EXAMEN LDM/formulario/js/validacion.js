const formulario = document.querySelector(".formulario-loco");
const botonEnviar = document.querySelector(".boton-enviar-loco");
const mensajeExito = document.getElementById("mensaje-exito");



// Inputs a validar pl
const inputs = [
    document.getElementById("usuario"),          
    document.getElementById("correo"),            
    document.getElementById("password"),          
    document.getElementById("fecha_nacimiento"),  
    document.getElementById("telefono"),          
    document.getElementById("nickname"),          
    document.getElementById("rango")              
];

// Array booleano
let validos = new Array(inputs.length).fill(false);



// Nombre: mínimo 3 letras
function validarNombre(nombre) {
    return nombre.trim().length >= 3;
}

// Contraseña: mínimo 6 caracteres
function validarPassword(password) {
    return password.length >= 6;
}

// Calcular edad
function calcularEdad(fecha) {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// Fecha: mayor o igual a 12 años
function validarFecha(fecha) {
    return calcularEdad(fecha) >= 12;
}

    //validar telefono
function validarTelefono(telefono){
    return telefono.length==9;
}

// Obtener el span del input
function obtenerSpan(input) {
    return input.nextElementSibling;
}

function validarCampo(input, index) {
    const span = obtenerSpan(input);
    let mensajeError = "";



    
    mensajeExito.style.display = "none";

    if (input.value.trim() === "") {
        mensajeError = "Este campo es obligatorio";
    }
    else if (input.id == "usuario" && !validarNombre(input.value)) {
        mensajeError = "El nombre debe tener al menos 3 caracteres";
    }
    else if (input.id === "password" && !validarPassword(input.value)) {
        mensajeError = "La contraseña debe tener al menos 6 caracteres";
    }
    else if (input.id == "fecha_nacimiento" && !validarFecha(input.value)) {
        mensajeError = "Debes tener al menos 12 años";
    }
    else if (input.id == "telefono" && !validarTelefono(input.value)){
        mensajeError = "Debe contener 9 digitos"
    }

    if (mensajeError !== "") {
        input.classList.add("invalid");
        span.textContent = mensajeError;
        validos[index] = false;
    } else {
        input.classList.remove("invalid");
        span.textContent = "";
        validos[index] = true;
    }

    validarFormulario();
}




function validarFormulario() {
    botonEnviar.disabled = validos.includes(false);
}

inputs.forEach((input, index) => {
    input.addEventListener("input", () => validarCampo(input, index));
    input.addEventListener("change", () => validarCampo(input, index));
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validos.includes(false)) {

        
        mensajeExito.textContent = "Formulario enviado, disfruta la magia unicorniana ";
        mensajeExito.style.display = "inline-block";

        
        const img = document.createElement("img");
        img.src = "../images/unicornio.jpeg";
        img.style.width = "170px";
        img.style.verticalAlign = "middle";
        img.style.marginLeft = "10px";
        img.style.position = "fixed";
        img.style.top = "700px";   
        img.style.left = "0";

        mensajeExito.appendChild(img);

        animarImagenRectilinea(img);

        formulario.reset();
        validos.fill(false);
        botonEnviar.disabled = true;
    }})




botonEnviar.disabled = true;



//Animacion y relacionado (animacion estreuctural, pagina https://es.javascript.info/)
// Animación lineal
function linear(timeFraction) {
  return timeFraction;
}

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
function animarImagenRectilinea(img) {

  const anchoPantalla = window.innerWidth;
  const anchoImagen = img.offsetWidth;

  animate({
    duration: 4000,
    timing: linear,
    draw(progress) {
      const x = -anchoImagen + progress * (anchoPantalla + anchoImagen);
      img.style.transform = `translateX(${x}px)`;
    }
  });
}


