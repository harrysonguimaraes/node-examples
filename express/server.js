var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log('Respondendo a requisição em "/"');
	res.send('Hello world');
});

app.get('/list_user', function(req, res) {
	console.log('Respondendo a requisição em  "list_user"');
	res.send('Lista de usuários');
});

app.get('/ab*cd', function(req, res) {
	console.log('Respondendo requisição em:' + req.url);
	res.send('Requisição: ' + req.url);
	// Alias para ab3cd, ab45cd, etc..
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Aplicação rodando em %s %s', host, port);
})