module.exports = function(directory, extension, callback) {

	var fs = require('fs');

	fs.readdir(directory, function(err, list) {

		if (err) {
			return callback(err);
		}
		var arquivos = [];
		for (var i = 0; i < list.length; i ++) {
			if (list[i].indexOf('.' + extension) !== -1) {
				arquivos.push(list[i]);
			}
		}
		return callback(null, arquivos);
	});

};