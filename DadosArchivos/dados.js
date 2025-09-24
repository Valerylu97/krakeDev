jugar = function () {
    // Lógica para jugar
    let aleatorio = lanzarDado();
    // Mostrar el número aleatorio en la etiqueta con id "lblNumero"
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblResultado", "ES MAYOR A 3");
        cambiarTexto("lblResultado", "GANASTE");
    }
    else{
        cambiarTexto("lblResultado", "ES MENOR O IGUAL A 3");
        cambiarTexto("lblResultado", "PERDISTE");
    }
}

// Crear una funcion llamar lanzarDado
// No recibe parametros
// Retorna un numero aleatorio entre 1 y 6
lanzarDado = function () {
    let aleatorio = Math.random();
    let numero = aleatorio * 6 + 1;
    numero = numero.toFixed(0); // Redondear a un número enter
    return numero;
}

