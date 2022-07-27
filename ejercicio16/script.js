/*

    16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios 
    y los muestre por pantalla. 

*/

function rellenarVectorDe5Elementos() {

    let numeros = [];

    for (let i = 0; i < 5; i++) {
        let numeroAleatorio = Math.ceil(Math.random() * 100);
        numeros[i] = numeroAleatorio;
    }

    return numeros;

}

function imprimirElementosDelVector(numeros) {
    numeros.forEach(function (numero) {
        console.log(numero);
    });

}

let vector1 = rellenarVectorDe5Elementos();
let vector2 = rellenarVectorDe5Elementos();

console.log("Vector 1:");
imprimirElementosDelVector(vector1);
console.log("Vector 2:");
imprimirElementosDelVector(vector2);
