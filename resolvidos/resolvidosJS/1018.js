var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = lines.shift();
let calculo;

console.log(x);
console.log(`${Math.floor(x / 100)} nota(s) de R$ 100,00`);
calculo = x % 100;

console.log(`${Math.floor(calculo / 50)} nota(s) de R$ 50,00`);
calculo = calculo % 50;

console.log(`${Math.floor(calculo / 20)} nota(s) de R$ 20,00`);
calculo = calculo % 20;

console.log(`${Math.floor(calculo / 10)} nota(s) de R$ 10,00`);
calculo = calculo % 10;

console.log(`${Math.floor(calculo / 5)} nota(s) de R$ 5,00`);
calculo = calculo % 5;

console.log(`${Math.floor(calculo / 2)} nota(s) de R$ 2,00`);
calculo = calculo % 2;

console.log(`${(calculo / 1).toFixed(0)} nota(s) de R$ 1,00`);   
