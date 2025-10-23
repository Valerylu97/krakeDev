//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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
    let palabraSecreta;
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