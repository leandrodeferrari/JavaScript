/*

    12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de 
    dato.

*/

let tipoDeDato = argumento => typeof argumento;

let argumento = prompt("Ingrese algo:","Escriba algo");

alert("El tipo de dato, de lo que escribió, es: " + tipoDeDato(argumento));
