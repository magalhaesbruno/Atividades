const prompt = require("prompt-sync")();
const calculo = (n1, n2, operator) => {
  return `${n1} x ${n2} = ${n1 + operator + n2}`;
};
console.log(calculo(2, 3, "*"));
