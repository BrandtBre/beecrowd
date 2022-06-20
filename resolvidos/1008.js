var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let a = Number(lines.shift());
let b = Number(lines.shift());
let c = parseFloat(lines.shift());


let salary = parseFloat(b * c);

console.log(`NUMBER = ${a}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);