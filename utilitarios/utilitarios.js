recuperarTexto = function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let componente = recuperarTexto(idComponente);
    let valorEntero = parseInt(componente);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let componente = recuperarTexto(idComponente);
    let valorFloat = parseFloat(componente);
    return valorFloat;
}

mostrarTexto = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

mostrarImagen = function(idComponente, rutaImagen){
    let componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTextoEnCaja = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    componente.value = mensaje;
}