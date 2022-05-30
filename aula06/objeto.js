/*OBJETOS
Objetos são basicamente variáveis com vários valores dentro.
EX: const carro = {marca:'Ford', modelo:'Ka', ano:2015}
Os valores dentro de um objeto são chamados de propiedades.
Objetos também podem ter métodos. Um método é uma função coloca dentro de uma propiedade.
*/
const carro = {
  marca: "Ford",
  modelo: "Ka",
  ano: 2015,
  placa: "ABC-12345",
  buzina: function () {
    console.log("BiiiiiiiiBiiiiiiii!!!!!!");
  },
  completo: function () {
    return `A marca é ${this.marca} e o modelo é: ${this.modelo}`;
  },
};
console.log(carro);
console.log(carro.buzina());
console.log(carro.completo());
