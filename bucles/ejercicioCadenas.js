ejecutarPrueba1 = function(){
    let cadena = recuperarTexto("txtCadena");
    recorrerCadena(cadena);
}
recorrerCadena = function(cadena){
    //0123
    //Juan
    let caracter;

    for(let i=0;i<cadena.length;i++){
        caracter = cadena.charAt(i);
        console.log("caracter " + caracter + " posicion " + i);
    }
}
ejecutarPrueba2 = function(){
    let cadena = recuperarTexto("txtCadena");
    let cadenaInvertida =invertirCadena(cadena);
    mostrarTexto("lblCadenaInvertida",cadenaInvertida);
}
invertirCadena = function(cadena){
    let cadenaInvertida = "";
    let caracter;
    for(let i=cadena.length-1;i>=0;i--){
        caracter = cadena.charAt(i);
        cadenaInvertida = cadenaInvertida + caracter;
    }
    return cadenaInvertida;
}