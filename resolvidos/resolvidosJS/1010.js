var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [codUm, qtdUm, valorUnidadeUm] = pegarValores(lines.shift());
let [codDois, qtdDois, valorUnidadeDois] = pegarValores(lines.shift());

let total = (qtdUm * valorUnidadeUm) + (qtdDois * valorUnidadeDois);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
