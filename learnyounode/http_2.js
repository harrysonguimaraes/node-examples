'use sctrict';

const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function(res) {

	res.pipe(bl(function(err, data) {

		console.log(data.toString().length);
		console.log(data.toString());
	}));

});