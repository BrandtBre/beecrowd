var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let salarioNovo = 0;
let reajuste = 0;

let numero = Number(lines.shift())

if (numero <= 400) {
  reajuste = numero * 0.15;
  salarioNovo = reajuste + numero;
  console.log(`Novo salario: ${salarioNovo.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 15 %`)
} else if (numero > 400 && numero <= 800) {
  reajuste = numero * 0.12;
  salarioNovo = reajuste + numero;
  console.log(`Novo salario: ${salarioNovo.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 12 %`)
} else if (numero > 800 && numero <= 1200) {
  reajuste = numero * 0.10;
  salarioNovo = reajuste + numero;
  console.log(`Novo salario: ${salarioNovo.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 10 %`)
} else if (numero > 1200 && numero <= 2000) {
  reajuste = numero * 0.07;
  salarioNovo = reajuste + numero;
  console.log(`Novo salario: ${salarioNovo.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 7 %`)
} else {
  reajuste = numero * 0.04;
  salarioNovo = reajuste + numero;
  console.log(`Novo salario: ${salarioNovo.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 4 %`)
}