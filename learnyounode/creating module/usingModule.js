var myModule = require('./module');

myModule(process.argv[2], process.argv[3], function(err, list) {
	
	if (err){
		console.log(err);
	}
	for (var i = 0; i < list.length; i ++) {
		
		console.log(list[i]);
	}
}); 