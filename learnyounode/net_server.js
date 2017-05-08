var net = require('net');

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function(socket) {

	var data = new Date();
	var resposta = data.getFullYear() + '-' + zeroFill(data.getMonth() + 1) + '-' + data.getDate() + ' ' + data.getHours() + ':' + zeroFill(data.getMinutes() + '\n');
	socket.end(resposta);
});

server.listen(+ process.argv[2]);