var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

while (true) {
    let senha = lines.shift();
    if (senha == 2002) {
        console.log("Acesso permitido");
        return;
    } else {
        console.log("Senha invalida");
    }
    
}