var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let calculo = x * 2;
console.log(`${calculo} minutos`);