var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let contador = 0;
let media = 0;
let nota = 0;

while (true) {
  let x = Number(lines.shift());
  if (x >= 0 && x <= 10) {
    nota += x;
    contador++;
  } else {
    console.log("nota invalida");
  }
  if (contador == 2) {
    media = nota / 2;
    return console.log(`media = ${media.toFixed(2)}`);
  }
}