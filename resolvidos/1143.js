var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift())

for (let index = 1; index <= x; index++) {
  console.log(`${index} ${index * index} ${index * index * index}`);
  
}