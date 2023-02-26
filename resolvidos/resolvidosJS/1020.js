var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let dias = lines.shift();
let meses;
let anos;

anos = dias / 365;
dias = dias % 365;
meses = dias / 30;
dias = dias % 30;

console.log(`${Math.floor(anos)} ano(s)`);
console.log(`${Math.floor(meses)} mes(es)`);
console.log(`${Math.floor(dias)} dia(s)`);