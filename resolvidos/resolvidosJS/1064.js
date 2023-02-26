var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let total = 0;
let v = 0;
let outro = 0;

for (let index = 0; index < 6; index++) {
    v = Number(lines.shift());
    if (v > 0) {
        total++;
        outro += v;
    }
}

console.log(`${total} valores positivos`);
console.log(`${(outro / total).toFixed(1)}`);