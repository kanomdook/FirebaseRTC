var static = require('node-static');
var http = require('http');
var staticServer = new static.Server({
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
});

var app = http.createServer(function (req, res) {
	staticServer.serve(req, res);
}).listen(3000);
