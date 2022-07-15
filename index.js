var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift());
let divisao = 0, a, c;

for(i = 1; i <= n; i++){
    divisao = 0;
    a = Number(lines.shift())
    for(c =1; c <= a; c++){
        if(a % c ==0 ){
            divisao++;
        }
    }
    if(divisao ==2){
        console.log(`${a} eh primo`);
    }else{
        console.log(`${a} nao eh primo`);
    }
}

