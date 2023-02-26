var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());

let n = parseFloat(3.14159);
let area = n * (a * a);

console.log(`A=${area.toFixed(4)}`)