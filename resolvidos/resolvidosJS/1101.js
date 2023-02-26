var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
let a = [];

while (true) {
  let [x, y] = pegarValores(lines.shift());
  if (x > 0 && y > 0) {
    if (x > y) {
      for (let index = y; index <= x; index++) {
        a.push(index)
        
      }
    } else {
      for (let index = x; index <= y; index++) {
        a.push(index)
        
      }
    }
  } else {
    return 
  }
  console.log(`${a.join(" ")} Sum=${a.reduce((a, b) => a + b, 0)}`);
  a = []
}