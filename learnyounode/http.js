'use strict';

const http = require('http');

http.get(process.argv[2], function(res) {

	res.setEncoding('utf-8');

	res.on('data', function(data) {
		console.log(data);
	});
});