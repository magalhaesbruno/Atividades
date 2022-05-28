const prompt = require("prompt-sync")();
console.clear();
lista = [];
let num = 0;
let r = "";
while (r != "N") {
  num = +prompt("Digite um número: ");
  while (true) {
    if (lista.includes(num) == false) {
      lista.push(num);
      break;
    } else {
      console.log(
        "Não foi possível inserir valor, o mesmo já se encontra na lista."
      );
      break;
    }
  }
  r = prompt("Você deseja inserir mais números? [S/N]").toLowerCase();
  if (r == "n") {
    break;
  }
}
console.log(lista.sort());
