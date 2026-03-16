function soloLetras(texto){

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    return regex.test(texto);
}