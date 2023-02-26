var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let y = Number(lines.shift());

if (x > y) {
  for (let index = y+1; index < x; index++) {
    if (index %5 == 2 || index %5 == 3 ) {
      console.log(index);
    }
    
  }
} else {
  for (let index = x+1; index < y; index++) {
    if (index %5 == 2 || index %5 == 3 ) {
      console.log(index);
    }
    
  }
}
