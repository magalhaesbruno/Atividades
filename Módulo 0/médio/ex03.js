const prompt = require("prompt-sync")();
console.clear();
let num1 = +prompt('Digite o primeiro valor: ');
let num2 = +prompt('Digite o segundo valor: ');
if (num1 > num2){
  console.log(`O número ${num1} é maior que o ${num2}`);
}else if (num1 < num2){
  console.log(`O númeor ${num2} é maior que o ${num1}`);
}else{
  console.log(`Os números ${num1} e ${num2} são iguais.`)
}
