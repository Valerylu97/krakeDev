probarAtributos = function(){
    let persona = {
        nombre: "Juan",
        edad: 30,
        estaVivo: true
    }
    console.log("Nombre: " + persona.nombre);
    if(persona.estaVivo == true){
        console.log("La persona está viva.");
    }
    else{
        console.log("La persona no está viva.");
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero: "532342423",
        saldo: 0.0
    }

    cuenta.saldo = 100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula: "0401703012",
        nombre: "Valeria"
    }
    let cliente1 = {};
    cliente1.nombre="Romeo";
    cliente1.apellido="Salcedo";
    cliente1.cedula="123123";
}

crearProducto = function(){
    let producto1 = {
        nombre: "Laptop",
        precio: 780.50,
        stock: 3
    };
    let producto2 = {
        nombre: "Smartphone",
        precio: 450.00,
        stock: 10
    };
    console.log("Producto 1: " + producto1.nombre);
    console.log("Producto 2: " + producto2.nombre);
    if(producto1.stock > producto2.stock){
        console.log("Producto 1 tiene más stock.");
    }
    if(producto1.stock < producto2.stock){
        console.log("Producto 2 tiene más stock.");
    }
    if(producto1.stock == producto2.stock){
        console.log("Ambos productos tienen el mismo stock.");
    }
}

probarIncrementarSaldo = function(){
    let cuenta = {
        numero: "1234567890",
        saldo: 200.0
    };
    incrementarSaldo(cuenta, 150);
    console.log(cuenta.saldo);
}

incrementarSaldo = function(cuenta, monto){
    cuenta.saldo += monto;
}

probarDeterminarMayor = function(){
    let persona1 = {
        nombre: "Ana",
        edad: 25
    };
    let persona2 = {
        nombre: "Luis",
        edad: 30
    };
    let mayor = determinarMayor(persona1, persona2);
    if(mayor){
        console.log("La persona mayor es: " + mayor.nombre);
    } else {
        console.log("Ambas personas tienen la misma edad.");
    } 
}

determinarMayor = function(persona1, persona2){
   if(persona1.edad > persona2.edad){
       return persona1;
    } else if(persona1.edad < persona2.edad){
       return persona2;
    } else {
       return null;
    } 
}

