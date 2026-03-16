function validarUsuario(usuario){

    const regex = /^[a-zA-Z0-9_]{4,16}$/;

    return regex.test(usuario);
}