var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => (a));

let numero = Number(lines.shift())
let coelho = 0;
let sapo = 0;
let rato = 0;
let total = 0;
let index = 0;

while (index < numero) {
  let [x, y] = pegarValores(lines.shift());
  total += Number(x);  
  if (y == 'C') {
    coelho += Number(x);
  } else if (y == 'R') {
    rato += Number(x);
  } else if (y == 'S'){
    sapo += Number(x);
  }
  index++;
}
let porcentagemRato = rato * 100 / total;
let porcentagemCoelho = coelho * 100 / total;
let porcentagemSapo = sapo * 100 / total;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de coelhos: ${porcentagemCoelho.toFixed(2)} %`);
console.log(`Percentual de ratos: ${porcentagemRato.toFixed(2)} %`);
console.log(`Percentual de sapos: ${porcentagemSapo.toFixed(2)} %`);