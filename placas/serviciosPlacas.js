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
        case "J":
            provincia = "Santo Domingo de los Tsáchilas";
            break;
        default:
            provincia = null;
    }
    return provincia;
}

obtenerTipoVehiculo = function(placa){
    let tipoVehiculo = "";
    let segundoCaracter = placa.charAt(1);

    switch(segundoCaracter){
        case "A": //A
            tipoVehiculo = "Vehículos comerciales";
            break;
        case "Z": //Z
            tipoVehiculo = "Vehículos comerciales";
            break;
        case "E": //E
            tipoVehiculo = "Vehículos gubernamentales";
            break;
        case "X": //X
            tipoVehiculo = "Vehículos de uso oficial";
            break;
        case "S": //S
            tipoVehiculo = "Vehículos de gobierno provincial";
            break;
        case "M": //M
            tipoVehiculo = "Vehículos municipales";
            break;
        default:
            tipoVehiculo = "Vehículos particulares";
    }
    return tipoVehiculo;
}

obtenerDiaPicoYPlaca = function(placa){
    let dia = "";
    let ultimoDigito = placa.charAt(placa.length - 1);

    switch(ultimoDigito){
        case "1":
        case "2":
            dia = "Lunes";
            break;
        case "3":
        case "4":
            dia = "Martes";
            break;
        case "5":
        case "6":
            dia = "Miércoles";
            break;
        case "7":
        case "8":
            dia = "Jueves";
            break;
        case "9":
        case "0":
            dia = "Viernes";
            break;
        default:
            dia = null;
    }
    return dia;
}