var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());


console.log(`TRIANGULO ${((a * c) / 2.0).toFixed(3)}`);
console.log(`CIRCULO ${((3.14159 * (c * c)).toFixed(3))}`);
console.log(`TRAPEZIO ${(((a + b) * c) / 2.0).toFixed(3)}`);
console.log(`QUADRADO ${((b * b)).toFixed(3)}`);
console.log(`RETANGULO ${((a * b)).toFixed(3)}`);