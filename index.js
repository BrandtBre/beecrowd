var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let x = lines.shift();
let palavra = "Feliz nat"

for (let index = 0; index < x; index++) {
    palavra += "a"
    
}

console.log(palavra + "l");


