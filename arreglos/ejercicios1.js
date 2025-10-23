let notas = [];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function(){
    let notaR;
    for(let i=0; i<notas.length; i++){
        notaR = notas[i];
        console.log(notaR);
    }
}

agregarNota = function(nota){
    notas.push(nota);
    mostrarNotas();
}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio = 0;
    for(let i=0; i<notas.length; i++){
        sumaNotas = sumaNotas + notas[i];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}

ejecutarPromedio = function(){
    let resultado = calcularPromedio();
    mostrarTexto("lblPromedio", "El promedio es: " + resultado);
}

generarTabla = function(){
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr></table>" + "<table><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>Notas</th></tr>";
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota = notas[i];
        contenidoTabla += "<tr><td>" + miNota + "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

probarAgregar = function(){
    let notaIngresada = recuperarInt("txtNota");
    agregarNota(notaIngresada);
}



