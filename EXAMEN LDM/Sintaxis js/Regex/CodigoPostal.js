function validarCodigoPostal(cp){

    const regex = /^\d{5}$/;

    return regex.test(cp);
}