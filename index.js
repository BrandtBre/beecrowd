var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b] = pegarValores(lines.shift());
let contador = 0;

for (let index = 0; index < a; index++) {
  let [x, y] = pegarValores(lines.shift());
  if (x == b && y == 0) {
    contador++;
  }
  
}
console.log(contador);