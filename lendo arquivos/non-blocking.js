var fs = require('fs');

fs.readFile('file.txt', function(err, data) {

	if (err){
		return console.log(err);
	}
	console.log(data.toString());
});

console.log('Finalizando execução');

// Exemplo com callback. Leitura acontece depois do console.log 
//avisando da finalização da execução, pois é assíncrono