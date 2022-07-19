/*

    5. Construir un programa que simule un menú de opciones para realizar las cuatro 
    operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
    numéricos enteros. El usuario, además, debe especificar la operación con el primer 
    carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
    o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 

*/

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function elegirDosNumeros() {

    let numero1 = parseInt(prompt("Ingrese su número 1:", 0));

    let numero2 = parseInt(prompt("Ingrese su número 2:", 0));

    let numeros = [numero1, numero2];

    return numeros;

}

function operacionesAritmeticas(opcion) {

    let numeros = [];

    switch (opcion) {

        case "s":

            numeros = elegirDosNumeros();

            let suma = sumar(numeros[0], numeros[1]);

            alert("La suma de sus números es: " + suma);

            break;

        case "r":

            numeros = elegirDosNumeros();

            let resta = restar(numeros[0], numeros[1]);

            alert("La resta de sus números es: " + resta);

            break;

        case "m":

            numeros = elegirDosNumeros();

            let multiplicacion = multiplicar(numeros[0], numeros[1]);

            alert("La multiplicación de sus números es: " + multiplicacion);

            break;

        case "d":

            numeros = elegirDosNumeros();

            let division = dividir(numeros[0], numeros[1]);

            alert("La división de sus números es: " + division);

            break;

        default:

            alert("Lo siento, ha ingresado una opción incorrecta");

            break;
    }

}

let opcion = prompt("¿Qué opción va a elegir? \n 1. Sumar (S/s) \n 2. Restar (R/r) \n 3. Multiplicar (M/m) \n 4. Dividir (D/d)").toLowerCase();

operacionesAritmeticas(opcion);
