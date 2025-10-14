let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado)
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}
modificarPuntos = function(numero){
    puntos += numero;
    cambiarTexto("puntos", puntos);
    //Si el jugador obtiene mas de 20 puntos
    //mostrar en pantalla un mensaje GANASTE!!
    //Colocar puntaje en 0 y lanzamientos en 5
    if(puntos > 20 ){
        cambiarTexto("lblResultado","GANASTE!!")
    }
}
modificarLanzamientos = function(){
    lanzamientos -= 1;
    cambiarTexto("lanzamientos", lanzamientos);
    if(lanzamientos==0 && puntos<=20){
        cambiarTexto("lblResultado","GAME OVER")
    }else if(lanzamientos==-1){
        limpiar("puntos");
        limpiar("lanzamientos")
        cambiarTexto("lblResultado", "")
    }
}
limpiar = function(idComponente){
    if(idComponente=="puntos"){
        cambiarTexto(idComponente,"0");
        puntos=0; 
        cambiarImagen("imagenDado","");  
    }
    else if(idComponente=="lanzamientos"){
        cambiarTexto(idComponente,"5");
        lanzamientos=5;
        cambiarImagen("imagenDado",""); 
    }
}

// Funcion mostrarCara recibe el numero que quiere mostrar
// y muestra la imagen correspondiente al numero que recibe
// no retorna nada
function mostrarCara(numero){
    if(numero==1){
        cambiarImagen("imagenDado","dados1.png");
    }
    else if(numero==2){
        cambiarImagen("imagenDado","dados2.png");
    }
    else if(numero==3){
        cambiarImagen("imagenDado","dados3.png");
    }
    else if(numero==4){
        cambiarImagen("imagenDado","dados4.png");
    }
    else if(numero==5){
        cambiarImagen("imagenDado","dados5.png");
    }
    else if(numero==6){
        cambiarImagen("imagenDado","dados6.png");
    }
}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}