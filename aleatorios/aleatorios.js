numeroAleatorio = function(){
    let aleatorio = parseInt(Math.random() * 100 + 1);
    return aleatorio;
}

generarAleatorios = function(){
    let aleatorios = [];
    let aux;
    let size = recuperarTexto("sizeArreglo");
    if(size >= 5 && size <= 20){
        for(let i = 0; i < size; i++){
            aux = numeroAleatorio();
            aleatorios.push(aux);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados = function(arregloNumeros){
    let contenidoTabla = "<table><tr><th>Números Aleatorios</th></tr>";
    let cmpTabla = document.getElementById("divTabla");
    let numero;
    for(let i = 0; i < arregloNumeros.length; i++){
        numero = arregloNumeros[i];
        contenidoTabla += "<tr><td>" + numero + "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}