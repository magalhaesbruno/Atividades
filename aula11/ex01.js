const calculo = (n1, n2, operator) => {
  return `${n1} x ${n2} = ${n1 + operator + n2}`;
};
const operador = +prompt("Digite a operação");
console.log(calculo(2, 3, operador));
