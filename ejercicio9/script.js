/**

    9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un 
    espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el 
    funcionamiento de la función Substring(). 

*/

function agregarEspacios(frase) {

    let fraseConEspacio = "";

    for (let i = 0; i < frase.length; i++) {

        if(i === frase.length-1){
            fraseConEspacio += frase.substring(i, i + 1);    
        } else {
            fraseConEspacio += frase.substring(i, i + 1) + " ";
        }

    }

    return fraseConEspacio;

}

let fraseUsuario = prompt("Ingrese una frase:", "Acá va la frase...");

let fraseConEspacio = agregarEspacios(fraseUsuario);

alert(fraseConEspacio);