var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = (lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());


let total = (c * 0.15) + b;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);