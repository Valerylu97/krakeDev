calcularPromedioNotas = function(){
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");

    let promedio = calcularPromedio(nota1,nota2,nota3);
    mostrarTexto("lblResultado", promedio);

    if(promedio>0 && promedio<5){
        mostrarTexto("lblCalificacion", "REPROBADO");
        mostrarImagen("imgResultado", "reprobar.gif");
    }else if(promedio>=5 && promedio<=8){
        mostrarTexto("lblCalificacion", "BUEN TRABAJO");
        mostrarImagen("imgResultado", "godjob.gif");
    }else if(promedio>=8 && promedio<=10){
        mostrarTexto("lblCalificacion", "EXCELENTE");
        mostrarImagen("imgResultado", "exito.gif");
    }else{
        mostrarTexto("lblCalificacion", "DATOS INCORRECTOS");
        mostrarImagen("imgResultado", "error.gif");
    }
}