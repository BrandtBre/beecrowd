var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let y = Number(lines.shift());

let calculo = parseFloat((y / 12) * x).toFixed(3);

console.log(calculo);