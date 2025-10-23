//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta; 

esMayuscula = function(caracter){
    let esMayuscula = false;
    let letra = caracter.charCodeAt(0);
    if(letra>=65 && letra<=90){
        esMayuscula = true;
    }
    else{
        esMayuscula = false;
    }
    return esMayuscula;
}

guardarPalabra = function(){
    let palabra = recuperarTexto("pswSecreta");
    let contador = 0;
    let esValido = false;
    if(palabra.length == 5){
        for(let i=0;i<5;i++){
            if(esMayuscula(palabra.charAt(i))){
                contador += 1;
            }
        }
        if(contador == 5){
            esValido = true;
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        }
    }else{
        alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS")
    }   
}

mostrarLetra = function(letra, posicion){
    if(posicion == 0){
        mostrarTexto("div0", letra);
    }
    if(posicion == 1){
        mostrarTexto("div1", letra);
    }
    if(posicion == 2){
        mostrarTexto("div2", letra);
    }
    if(posicion == 3){
        mostrarTexto("div3", letra);
    }
    if(posicion == 4){
        mostrarTexto("div4", letra);
    }
}

validar = function(letra){
    let letrasEncontradas;
    for(let i=0;i<palabraSecreta.length;i++){
        if(letra == palabraSecreta.charAt(i)){
            mostrarLetra(letra, i);
            letrasEncontradas += 1;
        }
    }
}

ingresarLetra = function(){
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
    }
    else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}
