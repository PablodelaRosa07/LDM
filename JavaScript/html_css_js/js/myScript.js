function myFirstFunction(nombre, apellidos){
    console.log("Tu nombre es: " + nombre+" y tu apellido es: "+apellidos);
}

function myFirstFunction_ok(){
    console.log("Thank you for you click.");
}
function myFirstFunction_mouseover(){
    console.log("Thank you for you interest.");
}


$("#btn").addEventListener("click",function(){

    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","Pon tu email");
    input.setAttribute("name","tuemail");

    $("#tablero").appendChild(input);
    console.log("Thank you for you click (from JS).");

    var correo = $("#email").value;
});


function $(elemento){
    return document.querySelector(elemento);
}



