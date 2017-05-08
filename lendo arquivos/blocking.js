var fs = require('fs');

var dados = fs.readFileSync('file.txt');

console.log(dados.toString());
console.log('Finalizando execução');

// Esse é um exemplo com I/O bloqueante.