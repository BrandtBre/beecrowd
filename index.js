var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let x = Number(lines.shift());
let hex = x.toString(16);
console.log(hex.toUpperCase());