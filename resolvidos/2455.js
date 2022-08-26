var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c, d] = pegarValores(lines.shift());

if (a * b === c * d) {
  console.log(0);
} else if (a * b > c * d) {
  console.log(-1);
} else {
  console.log(1);
} 
