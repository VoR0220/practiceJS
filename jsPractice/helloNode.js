var http = require('http'); //how we require modules

http.createServer(function(request, response) {
	response.writeHead(200); //status code in header
	response.write("Dog is running"); //response body
	setTimeout(function(){
		response.write("Dog is done.");
		response.end();
	}, 5000); //the amount of time to "time out"
	//response.end(); //close the connection
}).listen(8080); //listen for connection on this port
console.log('Listening on port 8080...');

/*var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Doing something else');

fs.readFile('/etc/hosts', function(err, contents){
	console.log(contents);
});
console.log('Doing something else');*/