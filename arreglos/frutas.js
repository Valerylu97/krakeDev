let frutas = ["manzana", "banana", "cereza", "durazno", "mango "];

probarBusqueda = function(){
    let frutaIngresada = recuperarTexto("txtFruta");
    let resultado = buscar(frutaIngresada);
    if(resultado == null){
        alert("La fruta " + frutaIngresada + " no se encuentra en el arreglo.");
    }else{
        alert("La fruta " + resultado + " fue encontrada en el arreglo.");
    }
}

buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null;
    for(let i = 0; i < frutas.length; i++){
        elemento = frutas[i];
        if(elemento == fruta){
            frutaEncontrada = elemento;
            for(let i=5;i>0;i--){
                i = i+2;
                console.log(i);
            }
            break;
        }
    }
    return frutaEncontrada;
}