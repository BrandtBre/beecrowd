var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let x = Number(lines.shift());
let soma = 0;

for (let index = 0; index < x; index++) {
  let [a, b] = pegarValores(lines.shift())
  soma = a + b;
  console.log(soma);  
}

