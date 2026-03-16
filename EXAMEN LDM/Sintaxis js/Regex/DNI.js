function validarFormatoDNI(dni){

    const regex = /^\d{8}[A-Z]$/i;

    return regex.test(dni);
}