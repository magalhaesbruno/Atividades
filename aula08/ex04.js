// Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo desses carros,
// isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e
// quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.
lista = [];
class Carro {
  constructor(modelo, marca, gasolina) {
    this.modelo = modelo;
    this.marca = marca;
    this.gasolina = gasolina;
  }
  buzina() {
    return "BIIIII!!!!!";
  }
}

const uno = new Carro("Uno", "Fiat", 12.5);
const corola = new Carro("Corola", "Toyota", 9.7);
const civic = new Carro("Civic", "Honda", 7.8);
const fiesta = new Carro("Fiesta", "Ford", 11.3);
const gol = new Carro("Gol", "VolksWagen", 12.2);
lista.push(uno);
lista.push(corola);
lista.push(civic);
lista.push(fiesta);
lista.push(gol);
console.log(lista);

const soma = (a, b) => {
  return a + b;
};
let atual = 0;
let consumo = 0;
lista.forEach((a, b) => {
  if (a.gasolina > atual) {
    atual = a.gasolina;
    modelo = a.modelo;
  }
  consumo = 1000 / a.gasolina;
  custo = consumo * 5.5;
  console.log(
    `O carro ${a.modelo} precisa de ${Math.round(
      consumo
    )} Litros para percorrer 1.000 KM de distâcnia e irá custar R$${Math.round(
      custo
    )}`
  );
});
console.log(
  `O modelo mais econômico é: ${modelo} que realiza ${atual}Km por litro `
);

