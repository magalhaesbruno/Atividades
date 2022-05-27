const prompt = require("prompt-sync")();
let login = prompt('Digite o seu login:');
let senha = prompt('Digite a sua senha:');
while (login == senha){
  console.log('Seu login e senha são iguais, insira os novamentes:')
  let login = prompt('Digite o seu login:');
  let senha = prompt('Digite a sua senha:');
  if (login != senha){
    console.log('Login e senhas diferentes, cadastrado com sucesso.')
    break
  }
}