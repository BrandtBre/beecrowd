var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let n = lines.shift();
let h;
let m;

h = n / 3600;
n = n % 3600;
m = n / 60;
n = n % 60;

console.log(`${Math.floor(h)}:${Math.floor(m)}:${Math.floor(n)}`);

