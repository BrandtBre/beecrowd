var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

while (true) {
    let [x, y] = pegarValores(lines.shift());
    if (x > 0 && y > 0) {
        console.log("primeiro");
    } else if (x > 0 && y < 0) {
        console.log("quarto");
    } else if (x < 0 && y < 0) {
        console.log("terceiro");
    } else if (x < 0 && y > 0) {
        console.log("segundo");
    } else {
        return;
    }
}
