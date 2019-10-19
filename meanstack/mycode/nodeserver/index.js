const http =require('http');

const hostname="localhost";

const port=3000;

const server=http.createServer((req,res) => {

	console.log(req.headers);

	res.statusCode=200;

	res.setHeader('Content-Type','text/html');

	res.end('<html><body><h1>server connection success:</h1></body></html>');
});

server.listen(port,hostname, () =>{
	console.log("server runnin at http://${hostname}:${port}");

});
