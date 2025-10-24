let clientes = [
    {cedula: "1718120131", nombre: "Juan", edad: 30},
    {cedula: "1234567890", nombre: "Maria", edad: 25},
    {cedula: "0987654321", nombre: "Pedro", edad: 40}
];

ejecutarBusqueda = function(){
    let cedula = recuperarTexto("txtCedulaBusqueda");
    let clienteEncontrado = buscarCliente(cedula);

    if(!clienteEncontrado){
        alert("cliente no encontrado");
    }
    else{
        mostrarTextoEnCaja("txtCedula", clienteEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", clienteEncontrado.nombre);
        mostrarTextoEnCaja("txtEdad", clienteEncontrado.edad);
    }
}

crearCliente = function(){
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarFloat("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = cedula;
    nuevoCliente.nombre = nombre;
    nuevoCliente.edad = edad;

    agregarCliente(nuevoCliente);
}

agregarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if(!clienteEncontrado){
        clientes.push(cliente);
        alert("Cliente agregado correctamente.");
        mostrarClientes();
    }else{
        alert("El cliente con cédula " + cliente.cedula + " ya existe.");
    }
}

buscarCliente = function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;

    for(let i=0; i<clientes.length; i++){
        elementoCliente = clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function(){
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr><th>Cedula</th><th>Nombre</th><th>Edad</th></tr>";
    let elementoCliente;
    for(let i=0; i<clientes.length; i++){
        elementoCliente = clientes[i];
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + elementoCliente.cedula + "</td>";
        contenidoTabla += "<td>" + elementoCliente.nombre + "</td>";
        contenidoTabla += "<td>" + elementoCliente.edad + "</td>";
        contenidoTabla += "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

guardarCambios = function(){
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarFloat("txtEdad");

    let datosCliente = {};
    datosCliente.cedula = cedula;
    datosCliente.nombre = nombre;
    datosCliente.edad = edad;

    modificarCliente(datosCliente);
}

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);

    if(clienteEncontrado){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
        alert("Cliente modificado correctamente.");
        mostrarClientes();
    }else{
        alert("Cliente no encontrado.");
    }
}
