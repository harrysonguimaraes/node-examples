var express = require('express'); 

var app = express();

// leitura de arquivos
var fs = require('fs');

// Atentendo GET
app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + '/users.json', 'utf-8', function(err, data) {
		console.log(data);
		res.end(data);
	})
});

app.post('/addUser', function(req, res) {
	
	// Objeto fake simulando que veio da requisição pra ser mais rápido
	var user = {
		'user4': {
			'name': 'Harryson',
			'password': 'password4',
			'profession': 'Software developer',
			'id': '4'
		}
	};

	// Não estamos salvando de fato no arquivo.
	fs.readFile(__dirname + '/users.json', 'utf-8', function(err, data) {
		data = JSON.parse(data);
		data['user4'] = user['user4'];
		console.log(data);
		res.end(JSON.stringify(data));
	})
});

app.get('/user/:id', function(req, res) {

	// Retorna o usuário solicitado
	fs.readFile(__dirname + '/users.json', 'utf-8', function(err, data) {

		var users = JSON.parse(data);
		var user = users['user' + req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	});
});

app.delete('/user/:id', function(req, res) {

	// Simula um delete no usuário solciitado. Não estamos de fato deletando na lógica.
	fs.readFile(__dirname + '/users.json', 'utf-8', function(err, data) {
       
       data = JSON.parse( data );
       delete data["user" + req.params.id];
       
       console.log( data );
       // Retorna os dados restantes.
       res.end( JSON.stringify(data));
	});
});

var server = app.listen(8081, function() {
	
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});