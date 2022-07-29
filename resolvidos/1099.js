var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = lines.shift();
let soma = 0;

for (let index = 0; index < n; index++) {
    let [x, y] = pegarValores(lines.shift());
    if (x > y) {
        for (let i = y + 1; i < x; i++) {
            if (i %2 !== 0) {
                soma += i 
            }
            
        }
    } else {
        for (let i = x + 1; i < y; i++) {
            if (i %2 !== 0) {
                soma += i 
            }
            
        }
    } 
    console.log(soma);
    soma = 0;
}