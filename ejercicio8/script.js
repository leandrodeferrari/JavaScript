/*

    8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
    programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de 
    todos ellos.

*/

let numeroUsuario = 1;
let suma = 0;
let contador;
let maximo, minimo, promedio;
bandera = true;

while (numeroUsuario != 0) {

    numeroUsuario = parseInt(prompt("Ingrese su número entero:", 0));

    if (bandera) {
        
        maximo = numeroUsuario;
        minimo = numeroUsuario;
        promedio = 1;
        bandera = false;
        suma += numeroUsuario;
        contador = 1;

    } else if(numeroUsuario === 0){
        alert("Cargando datos...");
    } else {

        suma += numeroUsuario;
        contador++;
        
        if (numeroUsuario>maximo) {
            maximo = numeroUsuario;
        }

        if (numeroUsuario<minimo) {
            minimo = numeroUsuario;
        }

        promedio = suma / contador;

    }

}

alert("El máximo número ingresado es: " + maximo);
alert("El mínimo número ingresado es: " + minimo);
alert("El promedio es: " + promedio);