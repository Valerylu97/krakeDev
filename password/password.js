ejecutarValidacion = function(){
    let password = recuperarTexto("txtPassword");
    let validar = validarPassword(password);
    if(validar.length == 0){
        mostrarTexto("lblResultado","Password Correcto");
    }
    else{
        mostrarTexto("lblResultado", validar);
    }
}
validarPassword = function(password){
    let esValido = false;
    let mensaje = "";
    if(password.length >= 8 && password.length<=16){
        esValido = true;
    }
    else{
        mensaje += "La contraseña debe contener de 8 a 16 caracteres\n"
        esValido = false;
    }
    if(!validarMayuscula(password)){
        mensaje += "La contraseña debe contener al menos una letra mayúscula\n";
        esValido = false;
    }
    if(!validarDigito(password)){
        mensaje += "La contraseña debe contener al menos un digito\n";
        esValido = false;
    }
    if(!validarCaracterEspecial(password)){
        mensaje += "La contraseña debe contener al menos un caracter especial * - _\n";
        esValido = false;
    }
    if(esValido == true){
        mensaje = "";
        return mensaje;
    }
    else{
        return mensaje;
    }
}
validarMayuscula = function(cadena){
    let esValido = false;
    let contMayuscula = 0;
    let letra;
    for(let i=0;i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contMayuscula+=1;
        }
    }
    if(contMayuscula>0){
        esValido = true;
    }
    return esValido;
}
validarDigito = function(cadena){
    let esValido = false;
    let contDigito = 0;
    let letra;
    for(let i=0;i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esDigito(letra)){
            contDigito+=1;
        }
    }
    if(contDigito>0){
        esValido = true;
    }
    return esValido;
}
validarCaracterEspecial = function(cadena){
    let esValido = false;
    let contador=0;
    let caracter;
    for(let i=0;i<cadena.length;i++){
        caracter = cadena.charAt(i);
        if(esAsterisco(caracter) || esGuion(caracter) || esGuionBajo(caracter)){
            contador+=1;
        }
    }
    if(contador>0){
        esValido = true;
    }
    return esValido;
}