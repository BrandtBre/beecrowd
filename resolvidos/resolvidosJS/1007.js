var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
let d = parseFloat(lines.shift());

let diferenca = (a * b - c * d);

console.log(`DIFERENCA = ${diferenca}`);