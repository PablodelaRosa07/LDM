console.log("Estoy funcionando")

/*
*
* Vamos a validar un formulario.
*
*/


/*
*
* Declaramos las variables generales y accedemos a los valores de los campos.
*
*/


// Contador nos indica el número de inputs
var contador = 0;

// Campos a validar 

var nombre;
var dni;
var coche;


/*
var nombre = document.getElementById("fname").value;
console.log(nombre);
var dni = document.getElementById("dni").value;
console.log(dni);
var coche = document.getElementById("cars").value;
console.log(coche);

var enviar = document.getElementById("enviar");
console.log(enviar);
*/

// Para activar envío: enviar.removeAttribute("disabled");


/*
*
* Definimos funciones de comprobación y útiles.
*
*/

function validadNombre(){
    document.getElementById("span_nombre").setAttribute("style","display:none")

    console.log("Entro en validad nombre")
    nombre = document.getElementById("fname").value;
    if (nombre.length > 0){
        contador++
        console.log(contador)
    }
    else {
        document.getElementById("span_nombre").setAttribute("style","display:initial")
    }
}



/*
*
* En caso positivo, habilitamos el envío.
*
*/