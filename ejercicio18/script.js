/*

    18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
    a) Determinar cual de los dos elementos de texto es mayor.
    b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
    operadores necesarios para obtener un resultado true y otro resultado false.
    c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
    dos elementos numéricos.

*/

let valores = [true, 5, false, "hola", "adios", 2];

// a)

let palabraMayorLongitud = "";
let mayorLongitud = 0;

valores.forEach(function (valor) {
    if (typeof valor == "string") {
        if (valor.length > mayorLongitud) {
            mayorLongitud = valor.length;
            palabraMayorLongitud = valor;
        }
    }
});

console.log("Mayor longitud: " + mayorLongitud);
console.log("Palabra con mayor longitud: " + palabraMayorLongitud);

// b)

console.log(typeof valores[0]);

valores.forEach(function (valor) {
    if(typeof valor == "boolean"){
        (valor == true) ? valor = false : valor = true;
    }
});

console.log(valores);