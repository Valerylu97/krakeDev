probarTasaInteres = function(){
    let ingresoAnual = recuperarFloat("ingresoAnual");
    let tasaInteres = calcularTasaInteres(ingresoAnual);
    mostrarTexto("resultadoTasaInteres", tasaInteres);
}

calcularTasaInteres = function(ingresoAnual){
    let tasaInteres;
    if(ingresoAnual<300000){
        tasaInteres = 16/100;
    }
    else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres = 15/100;
    }
    else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres = 14/100;
    }
    else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres = 13/100;
    }
    else if(ingresoAnual>=2000000){
        tasaInteres = 12/100;
    }
    return tasaInteres;
}

probarCapacidadPago = function(){
    let edad = recuperarInt("edad");
    let ingresos = recuperarFloat("ingresos");
    let egresos = recuperarFloat("egresos");
    let capacidad = calcularCapacidadPago(edad, ingresos,egresos);
    mostrarTexto("resultadoCapacidadPago", capacidad);
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    // capacidad es el 30% de lo que le sobra luego de restar egresos de ingresos
    let capacidad;
    let utilidad = ingresos - egresos;

    if(edad>50){
        capacidad = (utilidad*3)/100;
        return capacidad;
    } else if (edad<=50){
        capacidad = (utilidad*4)/100;
        return capacidad;
    }
}

probarDescuento = function(){
    let precio = recuperarFloat("precio");
    let cantidad = recuperarInt("cantidad");
    let total = calcularDescuento(precio, cantidad);
    mostrarTexto("resultadoDescuento", total);
}

calcularDescuento = function(precio, cantidad){
    let descuento;
    if(cantidad<3){;
        descuento = precio - 0;
        return descuento;
    } else if(cantidad>=3 && cantidad<=5){
        descuento = precio - (precio*2)/100;
        return descuento;
    } else if(cantidad>=6 && cantidad<=11){
        descuento = precio - (precio*3)/100;
        return descuento;
    } else if(cantidad>=12){
        descuento = precio - (precio*4)/100;
        return descuento;
    }
}

probarColesterolLDL = function(){
    let nivelColesterol = recuperarFloat("nivelColesterol");
    let categoria = determinarColesterolLDL(nivelColesterol);
    mostrarTexto("resultadoColesterolLDL", categoria);
}

determinarColesterolLDL = function(nivelColesterol) {
    let categoria;
    if (nivelColesterol < 100) {
        categoria = "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol < 129) {
        categoria = "Cerca del óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol < 159) {
        categoria = "Límite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol < 189) {
        categoria = "Alto";
    } else if (nivelColesterol >= 189) {
        categoria = "Muy alto";
    } else {
        categoria = "Valor no válido";
    }
    return categoria;
}

probarValidarClave = function(){
    let clave = recuperarTexto("clave");
    let validar = validarClave(clave);
    mostrarTexto("resultadoValidarClave", validar);
}

validarClave = function(clave){
    if(clave.length>=8 && clave.length<=16){
        return true;
    }
    else{
        return false;
    }
}

probarEsMayuscula = function(){
    let caracter = recuperarTexto("caracterMayuscula");
    let es = esMayuscula(caracter);
    mostrarTexto("resultadoEsMayuscula", es);
}

esMayuscula = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if(ascii>=65 && ascii<=90){
        return true;
    }else{
        return false;
    }
}

probarEsMinuscula = function(){
    let caracter = recuperarTexto("caracterMinuscula");
    let es = esMinuscula(caracter);
    mostrarTexto("resultadoEsMinuscula", es);
}

esMinuscula = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if(ascii>=97 && ascii<=122){
        return true;
    }else{
        return false;
    }
}

probarEsDigito = function(){
    let caracter = recuperarTexto("caracterDigito");
    let es = esDigito(caracter);
    mostrarTexto("resultadoEsDigito", es);
}

esDigito = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if(ascii>=48 && ascii<=57){
        return true;
    }else{
        return false;
    }
}

probarDarPermiso = function(){
    let notaMatematica = recuperarFloat("notaMatematica");
    let notaFisica = recuperarFloat("notaFisica");
    let notaGeometria = recuperarFloat("notaGeometria");
    let permiso = darPermiso(notaMatematica, notaFisica, notaGeometria);
    mostrarTexto("resultadoDarPermiso", permiso);
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }
    else{
        return false;
    }
}

probarOtorgarPermiso = function(){
    let notaMatematica = recuperarFloat("notaMatematica2");
    let notaFisica = recuperarFloat("notaFisica2");
    let notaGeometria = recuperarFloat("notaGeometria2");
    let permiso = otorgarPermiso(notaMatematica, notaFisica, notaGeometria);
    mostrarTexto("resultadoOtorgarPermiso", permiso);
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90){
        if(notaGeometria>80){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

probarDejarSalir = function(){
    let notaMatematica = recuperarFloat("notaMatematica3");
    let notaFisica = recuperarFloat("notaFisica3");
    let notaGeometria = recuperarFloat("notaGeometria3");
    let permiso = dejarSalir(notaMatematica, notaFisica, notaGeometria);
    mostrarTexto("resultadoDejarSalir", permiso);
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    if(notaFisica>90 || notaMatematica>90 ||notaGeometria>90){
        if(notaFisica>notaMatematica){
            return true;
        }
        else{
            return false;
        }
    }else{
       return false;
    }
}

