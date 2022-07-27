/*

    17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el 
    resultado.

*/

function borrarUltimosDosElementosDeUnVector(vector) {
    
    vector.pop();
    vector.pop();

}

function imprimirVector(vector){
    vector.forEach(elemento => {
        console.log(elemento);
    });
}

let vector = [2,45,67,45,34];

console.log("Vector:");

imprimirVector(vector);

borrarUltimosDosElementosDeUnVector(vector);

console.log("Vector, luego de borrar sus dos últimos elementos:");

imprimirVector(vector);