var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [x, y] = pegarValores(lines.shift());
let numero = 1;
let vetor = [];

for (let index = 1; numero <= y; index++) {
  for (let i = 0; i < x; i++) {
    vetor.push(numero)
    numero++
  }
  console.log(vetor.join(' '));

  vetor = []
}