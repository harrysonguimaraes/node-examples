'use strict';
(function() {
	let http = require('http');

	// Cria as opções para passar na requisição.
	const OPTIONS = {
		host: 'localhost',
		port: '8081',
		path: '/index.html'
	};

	// Cria uma requisição.
	let req = http.request(OPTIONS, function(res) {

		let body = '';
		res.on('data', function(data) {

			body += data;
		});

		res.on('end', function() {
			console.log(body);
		});
	});

	req.end();
})();