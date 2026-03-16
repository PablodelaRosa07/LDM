function validarURL(url){

    const regex = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,})([\/\w\.-]*)*\/?$/;

    return regex.test(url);
}