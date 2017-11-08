var http = require("http");
var port = 3000;

function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello world! \n It's my first simple server on heroku");
	response.end();
}

http.createServer(onRequest).listen(port, function (err) {
	if (err) {
		return console.log('Something bad happened', err);
	}
	console.log('Server is listening on ' + port);
});