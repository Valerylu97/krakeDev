saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombreIngresado = recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellidoIngresado = recuperarTexto("txtApellido");
    //recuperar el valor de la caja de texto txtEdad
    let edadIngresada = recuperarInt("txtEdad");    
    //recuperar el valor de la caja de texto txtEstatura
    let estaturaIngresada = recuperarFloat("txtEstatura");
    
    //mensaje
    let mensaje = "Hola " + nombreIngresado + " " + apellidoIngresado + ", bienvenido a KrakeDev. Veo que tienes " + edadIngresada + " años y mides " + estaturaIngresada + " metros.";

    //mostrar el mensaje en el div llamado "divSaludo"
    mostrarTexto("lblMensaje", mensaje);

    let rutaImagen = "../utilitarios/imagenes/gif-para-saludar.gif";
    mostrarImagen("idImagen", rutaImagen);

    mostrarTextoEnCaja("txtNombre", "");
}