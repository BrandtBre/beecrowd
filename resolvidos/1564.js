var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

let x = 0;

while ( x = lines.shift()) {
  if (x === 0) {
    console.log('vai ter copa!');
  } else {
    console.log('vai ter duas');
  }
}

