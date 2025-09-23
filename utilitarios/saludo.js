saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombreIngresado = recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellidoIngresado = recuperarTexto("txtApellido");
    //mostrar un mensaje de saludo
    alert("Hola " + nombreIngresado + " " + apellidoIngresado + ", bienvenido a KrakeDev");
}

recuperarTexto = function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}