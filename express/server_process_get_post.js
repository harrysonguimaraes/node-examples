var express = require('express');

var app = express();

// Usado para fazer o parse do corpo da requisição via post
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + '/' + index.html);
});

app.get('/process_get', function(req, res) {
	var response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function(req, res) {
	var response = {
		nome: req.body.nome,
		sobrenome: req.body.sobrenome
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server rodando em http://%s:%s', host, port);
});