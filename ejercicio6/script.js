/*

    6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
    En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. 

*/

function validarNumeroParImpar(numero) {

    if (numero === 0) {
        alert("El número no es par ni impar");
    } else if (numero % 2 === 0) {
        alert("Su número es par");
    } else if (numero % 2 === 1) {
        alert("Su número es impar");
    } else {
        alert("Lo siento, ha ingresado un número inválido");
    }

}

let numeroUsuario = parseInt(prompt("Ingrese su número:", 0));

validarNumeroParImpar(numeroUsuario);