var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

for (let index = 1; index <= 9; index = index + 2 ) {
  for (let i = 7; i >= 5; i--) {
    console.log(`I=${index} J=${i}`);  
  }
}
