var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());

console.log(`${x * 4}`);