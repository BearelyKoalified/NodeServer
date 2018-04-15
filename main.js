var http = require('http'); //requires http library in program - this is CommonJS module format
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');


//has callback method listening for event and will call method
//we passed to deal with request.
//so we 'call back' all methods listening for that event
//req - request object
//res - response object
