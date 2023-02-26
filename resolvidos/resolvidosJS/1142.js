var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let contador = 1;

for (let index = 0; index <= x; index++) {
  console.log(`${contador} ${++contador} ${++contador} PUM`);
  contador+= 2; 
}


