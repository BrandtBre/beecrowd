var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c, d] = pegarValores(lines.shift());

if (a > 0) {
  console.log(1);
} else if (b > 0) {
  console.log(2);
} else if (c > 0) {
  console.log(3);
} else {
  console.log(4);
}
  
