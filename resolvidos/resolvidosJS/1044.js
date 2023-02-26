var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [numUm, numDois] = pegarValores(lines.shift());

if(numUm % numDois == 0 || numDois % numUm == 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}