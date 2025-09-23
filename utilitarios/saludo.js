saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombreIngresado = recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellidoIngresado = recuperarTexto("txtApellido");
    //recuperar el valor de la caja de texto txtEdad
    let edadIngresada = recuperarInt("txtEdad");    
    //recuperar el valor de la caja de texto txtEstatura
    let estaturaIngresada = recuperarFloat("txtEstatura");
    //mostrar un mensaje de saludo
    alert("Hola " + nombreIngresado + " " + apellidoIngresado + ", bienvenido a KrakeDev");
}

recuperarTexto = function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let componente = recuperarTexto(idComponente);
    let valorEntero = parseInt(componente);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let componente = recuperarTexto(idComponente);
    let valorFloat = parseFloat(componente);
    return valorFloat;
}