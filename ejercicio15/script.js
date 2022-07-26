/*

    15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
    con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
    radio del círculo lo proporcionará el usuario.

*/

class Circulo {
    constructor(radio){
        this.radio = radio;
    }
}

function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio,2);
}

function calcularPerimetroCirculo(radio){
    return (Math.PI * 2) * radio;
}

let radioUsuario = prompt("Ingrese el radio de su círculo:",1);

const circuloUsuario = new Circulo(radioUsuario);

console.log("El área del círculo, es: " + calcularAreaCirculo(radioUsuario));

console.log("El perímetrodel círculo, es: " + calcularPerimetroCirculo(radioUsuario));