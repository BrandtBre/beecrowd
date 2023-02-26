var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let conc = ""

for (let index = 0; index < x; index++) {
  if (index == x - 1) {
    conc += "Ho"
  } else {
    conc += "Ho "
  }
  
}

console.log(conc + '!');