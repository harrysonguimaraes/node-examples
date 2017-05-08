var fs = require('fs');

var arquivo = fs.readFileSync(process.argv[2]);
var array = arquivo.toString().split('\n');
console.log(array.length -1);