var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => (a));

let x = lines.shift();

for (let index = 0; index < x; index++) {
  let [a, b] = pegarValores(lines.shift());
  if (a == "Thor") {
    console.log("Y");
  } else {
    console.log("N");
  }
  
}


