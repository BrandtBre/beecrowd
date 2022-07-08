var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let triangulo = ((a * c) / 2.0);
let circulo = (3.14159 * (c * c));
let trapezio = ((a + b) * c) / 2.0;
let quadrado = (b * b)
let retangulo = (a * b)


console.log(`TRIANGULO ${triangulo.toFixed(3)}`);
console.log(`CIRCULO ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO ${trapezio.toFixed(3)}`);
console.log(`QUADRADO ${quadrado.toFixed(3)}`);
console.log(`RETANGULO ${retangulo.toFixed(3)}`);