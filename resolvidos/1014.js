var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let distancia = Number(lines.shift());
let comb = parseFloat(lines.shift());

result = distancia / comb;

console.log(`${result.toFixed(3)} km/l`);