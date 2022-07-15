var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b] = pegarValores(lines.shift());
let total;

if(a == 1){
    total = b * 4;
}else if(a == 2){
    total = b * 4.5;
}else if(a == 3){
    total = b * 5;
}else if(a == 4){
    total = b * 2;
}else if(a == 5){
    total = b * 1.5;
}

console.log(`Total: R$ ${total.toFixed(2)}`);