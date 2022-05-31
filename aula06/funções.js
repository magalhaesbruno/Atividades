function soma(valor1, valor2) {
  return valor1 + valor2;
}
console.log(soma(10, 20));
//Também podemos 
function Book(tittle, pages, autor) {
  this.tittle = tittle;
  this.pages = pages;
  this.autor = autor;
}
var livro = new Book("Demolidor", 500, "Marvel");
console.log(livro);
