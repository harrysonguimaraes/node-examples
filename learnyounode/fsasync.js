var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
	var array = data.split('\n');
	console.log(array.length -1);
});