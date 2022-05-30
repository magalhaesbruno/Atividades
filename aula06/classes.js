/* As classes são bascaimente como fábricas para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa de máquinas para construir os 
objetos, as Classes no JavaScript usam um método chamado constructor() para fabricar objetos
*/

class Carro {
  constructor(valor1, valor2, valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
  }
  buzina() {
    return this.modelo + " buzinou : Biiiiiiiii!!!!";
  }
}
const uno = new Carro("Fiat", "Uno", 2001);
console.log(uno);
console.log(uno.buzina());
//Posso alterar um dado dentro da classe assim:
uno.ano = 2019;
class Cadastro {
  constructor(value1, value2, value3) {
    this.nome = value1;
    this.idade = value2;
    this.sexo = value3;
  }
}

const aluno = new Cadastro("Bruno", 27, "Masculino");
console.log(aluno);
const lista = [];
lista.push(aluno);
console.log(lista);
console.log(lista.indexOf(aluno));
