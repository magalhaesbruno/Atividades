const prompt = require("prompt-sync")();
console.clear();
let cont = 0;
while (cont < 11) {
  for (i = 0; i < 11; i++) {
    console.log(`${cont} x ${i} = ${cont * i}`);
  }
  cont++;
}
