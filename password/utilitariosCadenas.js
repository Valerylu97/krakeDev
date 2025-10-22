esMayuscula = function(caracter){
    let esMayuscula = false;
    caracter = caracter.charCodeAt(0);

    if(caracter >= 65 && caracter <= 90){
        esMayuscula = true;
    }
    else{
        esMayuscula = false;
    }
    return esMayuscula;
}

esDigito = function(caracter){
    let esDigito = false;
    caracter = caracter.charCodeAt(0);

    if(caracter >= 48 && caracter <= 57){
        esDigito = true;
    }
    else{
        esDigito = false;
    }
    return esDigito;
}

esGuion = function(caracter){
    let esGuion = false;
    caracter = caracter.charCodeAt(0);

    if(caracter == 45){
        esGuion = true;
    }
    else{
        esGuion = false;
    }
    return esGuion;
}

esAsterisco = function(caracter){
    let esAsterisco = false;
    caracter = caracter.charCodeAt(0);

    if(caracter == 42){
        esAsterisco = true;
    }
    else{
        esAsterisco = false;
    }
    return esAsterisco;
}

esGuionBajo = function(caracter){
    let esGuionBajo = false;
    caracter = caracter.charCodeAt(0);

    if(caracter == 95){
        esGuionBajo = true;
    }
    else{
        esGuionBajo = false;
    }
    return esGuionBajo;
}

mostrarMensaje = function(idComponente ,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}