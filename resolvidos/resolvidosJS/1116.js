var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = lines.shift();
let divisao;

for (let index = 0; index < n; index++) {
    let [x, y] = pegarValores(lines.shift());
    if (y === 0) {
        console.log("divisao impossivel");
    } else {
        divisao = x / y;
        console.log(divisao.toFixed(1));
    }
    
}