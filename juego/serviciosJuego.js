//Obtiene un número aleatorio entre 1 y 3
obtenerAleatorio = function(){
    let aleatorio = Math.random()
    let numero = Math.floor(aleatorio * 3) + 1
    return numero
}

//Genera de forma random un elemento entre piedra, papel o tijera
generarElemento = function(){
    let numero = obtenerAleatorio()
    if(numero === 1){
        return "piedra"
    }else if(numero === 2){
        return "papel"
    }else{
        return "tijera"
    }
}

//Determina el ganador entre el jugador y la computadora
determinarGanador = function(eleccionJugador1, eleccionJugador2){
    let jugador = eleccionJugador1
    let computadora = eleccionJugador2
    
    if(jugador === computadora){
        return 0 //Empate
    }else if(
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
    ){
        return 1 //Jugador gana
    }else{
        return 2 //Computadora gana
    }
}

//Genera la ruta de la imagen según el elemento
generarRuta = function(nombre){
    let ruta = "./imagenes/" + nombre + ".png"
    return ruta
}

