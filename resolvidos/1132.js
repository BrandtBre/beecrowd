var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let y = Number(lines.shift());
let soma = 0;

if (x > y) {
  for (let index = y; index <= x; index++) {
    if (index %13 != 0) {
      soma += index;
    }
    
  }
} else {
  for (let index = x; index <= y; index++) {
    if (index %13 != 0) {
      soma += index;
    }
    
  }
}

console.log(soma);