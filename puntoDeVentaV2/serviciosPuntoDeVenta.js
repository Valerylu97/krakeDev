serviciosPuntoDeVenta = function(monto, porcentajeDescuento){
    let descuento = (monto * porcentajeDescuento) / 100;
    return descuento;
}

calcularIVA = function(monto){
    let iva = (monto * 12) / 100;
    return iva;
}

calcularSubtotal = function(precio, cantidad){
    let subtotal = precio * cantidad;
    return subtotal;
}

calcularTotal = function(subtotal, descuento, iva){
    let total = subtotal - descuento + iva;
    return total;
}

calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let descuento = 0;

    if(cantidad < 3){
        descuento = subtotal * 0; // 0% de descuento
    }
    else if(cantidad >= 3 && cantidad <= 5){
        descuento = subtotal * 0.03; // 3% de descuento
    }
    else if(cantidad > 5 && cantidad <= 11){
        descuento = subtotal * 0.04; // 4% de descuento
    }
    else if(cantidad > 11){
        descuento = subtotal * 0.05; // 5% de descuento
    }

    return descuento;
}