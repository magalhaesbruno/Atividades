const prompt = require("prompt-sync")();
console.clear();
let num = +prompt("Digite um número: ");

while (num == 0) {
  console.log("O número não pode ser igual a zero.");
  num = +prompt("Digite um número: ");
}
if (num > 0) {
  console.log("O número digitado é positivo.");
} else {
  console.log("O número é negativo.");
}
