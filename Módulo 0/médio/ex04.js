const prompt = require("prompt-sync")();
console.clear();
let nota = +prompt("Digite a sua média entre 0 e 10: ");
if (nota < 6) {
  console.log("A sua nota foi: F");
} else if (nota >= 6 && nota < 7) {
  console.log("A sua nota foi:  D");
} else if (nota >= 7 && nota < 8) {
  console.log("A sua nota foi: C");
} else if (nota >= 8 && nota < 9) {
  console.log("A sua nota foi: B");
} else if (nota >= 9 && nota <= 10) {
  console.log("Parabéns!! A sua nota foi: A");
}
