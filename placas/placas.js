validarPlaca = function(){
    let placa = document.getElementById("placa").value;
    let erroresEstructura = validarEstructura(placa);
    let provincia = "";
    let tipoVehiculo = "";
    let dia = "";

    if(erroresEstructura == null){
        mostrarMensaje("lblResultado"," La placa es válida.");
        
        provincia = obtenerProvincia(placa);
        if(provincia == null){
            provincia = "Provincia incorrecta";
            mostrarMensaje("lblProvincia",provincia);
        }else{
            mostrarMensaje("lblProvincia",provincia);
        }

        tipoVehiculo = obtenerTipoVehiculo(placa);
        if(tipoVehiculo == null){
            tipoVehiculo = "Tipo de vehículo incorrecto";
            mostrarMensaje("lblTipoVehiculo",tipoVehiculo);
        }else{
            mostrarMensaje("lblTipoVehiculo",tipoVehiculo);
        }

        dia = obtenerDiaPicoYPlaca(placa);
        if(dia == null){
            dia = "Libre circulación";
        }else{
            mostrarMensaje("lblDiaPicoYPlaca",dia);
        }
    }
    else{
        mostrarMensaje("lblResultado","ESTRUCTURA INCORRECTA");
        mostrarMensaje("lblError", erroresEstructura);
        mostrarMensaje("lblProvincia", "");
        mostrarMensaje("lblTipoVehiculo", "INCORRECTO");
    }
}

limpiarPlaca = function(){
    document.getElementById("placa").value = "";
    mostrarMensaje("lblResultado", "");
    mostrarMensaje("lblError", "");
    mostrarMensaje("lblProvincia", "");
    mostrarMensaje("lblTipoVehiculo", "");
    mostrarMensaje("lblDiaPicoYPlaca", "");
}