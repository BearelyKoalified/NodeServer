var net = require('net')

//creating server
var chatServer = net.createServer()

//on() method is event listener
chatServer.on('connection', function(client) {
	client.write('Hi!\n');
	client.write('Bye!\n');


	client.end()
})

//tells server what port to listen to
chatServer.listen(9000)
