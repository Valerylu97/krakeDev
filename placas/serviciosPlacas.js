//Valida la estructura de la placa, en base a las siguientes reglas:
// - Debe tener 7 u 8 caracteres.
// - Los primeros 3 caracteres deben ser letras mayúsculas.
// - El cuarto carácter debe ser un guion (-).
// - Los últimos 3 o 4 caracteres deben ser dígitos (0-9).
// EN CASO DE ERROR, DEVUELVE UN MENSAJE INDICANDO LA FALLA.
// RECOMENDACION: CONCATENAR LOS MENSAJES DE ERROR Y MOSTRARLOS TODOS JUNTOS.

validarEstructura = function(placa){
    let esValido = false;
    let mensaje = "";

    if(placa.length != 7){
        if(placa.length == 8){
            esValido = true;
        }
        else{
            mensaje += "La placa debe tener 7 u 8 caracteres.\n";
            esValido = false;
        }
    }
    if(placa.length == 7){
        esValido = true;
    }
    if(!esMayuscula(placa.charAt(0))){
        mensaje += "El primer carácter debe ser una letra mayúscula.\n";
        esValido = false;
    }
    if(!esMayuscula(placa.charAt(1))){
        mensaje += "El segundo carácter debe ser una letra mayúscula.\n";
        esValido = false;
    }
    if(!esMayuscula(placa.charAt(2))){
        mensaje += "El tercer carácter debe ser una letra mayúscula.\n";
        esValido = false;
    }
    if(!esGuion(placa.charAt(3))){
        mensaje += "El cuarto carácter debe ser un guion.\n";
        esValido = false;
    }
    if(!esDigito(placa.charAt(4))){
        mensaje += "El quinto carácter debe ser un dígito.\n";
        esValido = false;
    }
    if(!esDigito(placa.charAt(5))){
        mensaje += "El sexto carácter debe ser un dígito.\n";
        esValido = false;
    }
    if(!esDigito(placa.charAt(6))){
        mensaje += "El séptimo carácter debe ser un dígito.\n";
        esValido = false;
    }
    if(placa.length == 8){
        if(!esDigito(placa.charAt(7))){
            mensaje += "El octavo carácter debe ser un dígito.\n";
            esValido = false;
        }
    }
    if(esValido == false){
        return mensaje;
    }
    return null;
}

obtenerProvincia = function(placa){
    let provincia = "";
    let codigoProvincia = placa.charAt(0);

    switch(codigoProvincia){
        case "A":
            provincia = "Azuay";
            break;
        case "B":
            provincia = "Bolívar";
            break;
        case "C":
            provincia = "Carchi";
            break;
        case "U":
            provincia = "Cañar";
            break;
        case "X":
            provincia = "Cotopaxi";
            break;
        case "H":
            provincia = "Chimborazo";
            break;
        case "O":
            provincia = "El Oro";
            break;
        case "E":
            provincia = "Esmeraldas";
            break;
        case "W":
            provincia = "Galápagos";
            break;
        case "G":
            provincia = "Guayas";
            break;
        case "I":
            provincia = "Imbabura";
            break;
        case "L":
            provincia = "Loja";
            break;
        case "M":
            provincia = "Manabí";
            break;
        case "R":
            provincia = "Los Ríos";
            break;
        case "V":
            provincia = "Morona Santiago";
            break;
        case "N":
            provincia = "Napo";
            break;
        case "S":
            provincia = "Pastaza";
            break;
        case "P":
            provincia = "Pichincha";
        break;
        case "K":
            provincia = "Sucumbíos";
            break;
        case "Q":
            provincia = "Orellana";
            break;
        case "T":
            provincia = "Tungurahua";
            break;
        case "Z":
            provincia = "Zamora Chinchipe";
            break;
        case "Y":
            provincia = "Santa Elena";
            break;
        default:
            provincia = null;
    }
    return provincia;
}