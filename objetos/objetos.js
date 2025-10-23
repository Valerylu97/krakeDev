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