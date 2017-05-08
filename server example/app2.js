"use strict";
(function() {
	let http = require('http');
	let fs = require('fs');
	let url = require('url');

	http.createServer(function(req, res) {

		// faz parse na requisição pegando o pathname.
		let pathname = url.parse(req.url).pathname;

		console.log('Requisição para:' + pathname + ' recebida!');

		fs.readFile(pathname.substr(1), function(err, data) {
			if (err) {
				console.log(err);
				// Retorna NOT FOUND 
				res.writeHead(404, {'Content-Type': 'text/html'});
			
			} else {
			
				// Escreve o conteúdo do arquivo no corpo da resposta.
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data.toString());

			}
			res.end();

		});
	}).listen(8081);

	console.log('Servidor iniciado em localhost:8081');
})();