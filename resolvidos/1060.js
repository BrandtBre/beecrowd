var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let total = 0;

for (let index = 0; index < 6; index++) {
    numero = Number(lines.shift());
    if (numero > 0) {
        total++;
    }
}

console.log(`${total} valores positivos`);