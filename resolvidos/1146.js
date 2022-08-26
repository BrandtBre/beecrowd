var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let vetor = [];

while (true) {
  let x = Number(lines.shift());
  if (x > 0) {
    for (let index = 1; index <= x; index++) {
      vetor.push(index)
      
    }    
    console.log(`${vetor.join(" ")}`);
    vetor = []
  } else {
    return
  }
}