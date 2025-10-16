calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");

    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");

    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");

    //VALIDACIONES
    if(esProductoValido(nombreProducto, "lblErrorProducto") & esPrecioValido(precioProducto, "lblErrorPrecio") & esCantidadValida(cantidad, "lblErrorCantidad")){
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        valorIVA = calcularIVA(valorSubtotal);
        porcentajeDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        valorTotal = calcularTotal(valorSubtotal, porcentajeDescuento, valorIVA);

        mostrarTexto("lblSubtotal", valorSubtotal);
        mostrarTexto("lblDescuento", porcentajeDescuento);
        mostrarTexto("lblValorIVA", valorIVA);
        mostrarTexto("lblTotal", valorTotal);
    }else{
        mostrarTexto("lblTotal", "0.0");      
    }
}

limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblErrorProducto", "");
    mostrarTexto("lblErrorPrecio", "");
    mostrarTexto("lblErrorCantidad", "");
} 
/* SI TODO FUNCIONA, HACER UN PUSH */

esProductoValido = function(producto, idComponenteError){
    let hayError = false;

    if(producto == ""){
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayError = true;
    }
    if(producto.length > 10){
        mostrarTexto(idComponenteError, "NO DEBE CONTENER MÁS DE 10 CARACTERES")
        hayError = true;
    }
    if(hayError == false){
        mostrarTexto(idComponenteError, "");
    }
    return !hayError;
}

esCantidadValida = function(cantidad, idComponenteError){
    let hayError = false;

    if(cantidad == ""){
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayError = true;
    }
    if(isNaN(cantidad)){
        mostrarTexto(idComponenteError, "INGRESE UN NÚMERO");
        hayError = true;
    }
    if(cantidad < 0 || cantidad > 100){
        mostrarTexto(idComponenteError, "INGRESE UN NÚMERO ENTRE 0 Y 100");
        hayError = true;
    }
    if(hayError == false){
        mostrarTexto(idComponenteError, "");
    }
    return !hayError;
}

esPrecioValido = function(precio, idComponenteError){
    let hayError = false;   

    if(precio == ""){
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayError = true;
    }
    if(isNaN(precio)){
        mostrarTexto(idComponenteError, "INGRESE UN NÚMERO");
        hayError = true;
    }
    if(precio < 0 || precio > 50){
        mostrarTexto(idComponenteError, "INGRESE UN NÚMERO ENTRE 0 Y 50");
        hayError = true;
    }
    if(hayError == false){
        mostrarTexto(idComponenteError, "");
    }
    return !hayError;
}