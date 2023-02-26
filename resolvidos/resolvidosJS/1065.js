var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let total = 0;
let v = 0;

for (let index = 0; index < 5; index++) {
    v = Number(lines.shift());
    if (v %2 == 0) {
        total++;
        
    }
}

console.log(`${total} valores pares`);
