const prompt = require("prompt-sync")();
console.clear();
let num = parseInt(prompt("Digite um número: "));
if (num % 2 == 0) {
  console.log(`O número ${num} digita é par.`);
} else {
  console.log("O número digitado é impar.");
}
