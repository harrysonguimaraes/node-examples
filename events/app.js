// Importa o módulo de eventos.
var events = require('events');

var eventEmmiter = new events.EventEmitter();

var connectHandler = function coonected() {
	
	console.log('Connection successful.');

	// Dispara o evento 'dados_recebidos'
	eventEmmiter.emit('dados_recebidos');
}

// Houve o evento connection e chama a function connectHandler
eventEmmiter.on('connection', connectHandler);

// Houve a função dados_recebidos e executa a função passada.
eventEmmiter.on('dados_recebidos', function(){
	console.log('Dados recebidos com sucesso.');
});

// Dispara o evento 'connection', que irá printar 'Connection successfull'
// e emitir outro evento 'dados_recebidos' e printar 'Dados recebidos com sucesso.'
eventEmmiter.emit('connection');

// Nesse caso os eventos foram disparados e executados antes do console.log abaixo.
console.log('Program ended.');