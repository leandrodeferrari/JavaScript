/*

    14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
    Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
    y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
    numero de páginas.

*/

class Libro {
    constructor(isbn,titulo,autor,numeroDePaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }
}

let isbn = prompt("Ingrese el ISBN de su libro:");
let titulo = prompt("Ingrese el título de su libro:");
let autor = prompt("Ingrese el autor de su libro:");
let numeroDePaginas = prompt("Ingrese el número de páginas, de su libro:");

const libroUsuario = new Libro(isbn,titulo,autor,numeroDePaginas);

console.log("Isbn: " + libroUsuario.isbn);
console.log("Título: " + libroUsuario.titulo);
console.log("Autor: " + libroUsuario.autor);
console.log("Número de páginas: " + libroUsuario.numeroDePaginas);