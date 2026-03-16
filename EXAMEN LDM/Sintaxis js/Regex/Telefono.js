function validarTelefono(telefono){

    const regex = /^[6789]\d{8}$/;

    return regex.test(telefono);
}