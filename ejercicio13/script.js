/*

    13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 
    'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

*/

function Persona(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}

let persona1 = new Persona("Leandro", 29, 'H', 66, 1.65);

for (const propiedad in persona1) {
    console.log(propiedad + " : " + persona[propiedad]);
}
