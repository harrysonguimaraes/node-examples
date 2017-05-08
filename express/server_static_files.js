var express = require('express');

var app = express();

// Serve arquivos estáticos dentro da pasta public
//Acessando localhost:8081/gestao_acesso.png a imagem é retornada.
app.use(express.static('public'));

app.get('/', function(req, res) {

	console.log('Requisição em: ' + req.url);
	res.send('Hello world');
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Web server rodando em %s %s', host, port);
});	