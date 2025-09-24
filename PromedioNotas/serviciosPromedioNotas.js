calcularPromedio = function(n1,n2,n3){
    let suma = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    let promedio = suma / 3;
    promedio = promedio.toFixed(2); // Redondear a dos decimales
    return promedio;
}