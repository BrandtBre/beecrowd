var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());
let R1 = 0;
let R2 = 0;
let b1; 

b1 = Math.pow(b, 2);
let delta = b1 - (4 * a * c);

R1 = (((-1 * b) + (Math.sqrt(delta))) / (2 * a));
R2 = (((-1 * b) - (Math.sqrt(delta))) / (2 * a));

if (a === 0 || delta < 0) {
    console.log("Impossivel calcular");
} else {
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}