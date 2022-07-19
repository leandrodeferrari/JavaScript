/*

    7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
    solicite números al usuario hasta que la suma de los números introducidos supere el 
    límite inicial. 

*/

function ingresarNumerosHastaSuperarLimitePositivo(numeroLimitePositivo) {

    let sumaNumeros = 0;

    while (sumaNumeros <= numeroLimitePositivo) {

        let numeroUsuario = parseInt(prompt("Ingrese un número:"));

        sumaNumeros += numeroUsuario;

    }


    (sumaNumeros >= numeroLimitePositivo) ? alert("¡Llegaste al límite!") : alert("Ha ocurrido un error, al ignresar el número");

}

let numeroUsuario = parseInt(prompt("Ingrese un valor numeríco, para el límite positivo:"));


ingresarNumerosHastaSuperarLimitePositivo(numeroUsuario);
