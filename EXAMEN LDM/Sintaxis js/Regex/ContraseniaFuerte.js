function passwordFuerte(password){

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,21}$/;

    return regex.test(password);
}
//mínimo 8 caracteres, mayúscula,minúscula, número , símbolo o caracter especial you know