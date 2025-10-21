let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function(seleccionado){

    //Actualizar la imagen seleccionada
    mostrarImagen("imgSeleccion", generarRuta(seleccionado));

    //Invoca a generarElemento y guarda en una variable
    let elemento = generarElemento();

    //Invocar a generarRuta con el elemento generado y guardar en una variable
    let rutaElemento = generarRuta(elemento);

    //Invoca a determinarGanador con el elemento seleccionado y el elemento generado
    let resultado = determinarGanador(elemento, seleccionado);

    if(resultado == 0){
        mostrarTexto("lblResultado", "EMPATE");
    }else if(resultado == 1){
        mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
        puntosUsuario = puntosUsuario + 1;
        
    }else{
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
        puntosComputadora= puntosComputadora + 1;
        
    }
    
    //Actualizar las puntuaciones
    mostrarTexto("lblPuntosUsuario", puntosUsuario);
    mostrarTexto("lblPuntosComputadora", puntosComputadora);

    if(puntosUsuario == 5){
        mostrarTexto("lblResumen", "¡FELICIDADES! ¡HAS GANADO EL JUEGO!");
    }
    else if(puntosComputadora == 5){
        mostrarTexto("lblResumen", "¡LO SIENTO! ¡EL COMPUTADOR HA VENCIDO!");
    }
}

limpiar = function(){
    puntosUsuario = 0;
    puntosComputadora = 0;
    mostrarImagen("imgSeleccion", "");
    mostrarTexto("lblPuntosUsuario", puntosUsuario);
    mostrarTexto("lblPuntosComputadora", puntosComputadora);
    mostrarTexto("lblResumen", "");
}
