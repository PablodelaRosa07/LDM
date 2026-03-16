function validarTarjeta(numero){

    const regex = /^\d{16}$/;

    return regex.test(numero);
}