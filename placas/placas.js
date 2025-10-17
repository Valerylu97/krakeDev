validarPlaca = function(){
    let placa = document.getElementById("placa").value;
    let erroresEstructura = validarEstructura(placa);
    let provincia = "";

    if(erroresEstructura == null){
        mostrarMensaje("lblResultado"," La placa es válida.");
        provincia = obtenerProvincia(placa);
        mostrarMensaje("lblProvincia",provincia);
    }
    else{
        mostrarMensaje("lblResultado","ESTRUCTURA INCORRECTA");
        mostrarMensaje("lblError", erroresEstructura);
        mostrarMensaje("lblProvincia", "Provincia incorrecta");
    }
}