var http = require("http");
var fs = require('fs');
var join = require('path').join;
var parse = require("url").parse;


function errorPage(res){
	res.writeHead(200, {'Content-type' : 'text/html'});
	res.write("<h1>OOPS!!!!<br/>Something wrong happened<hr/>");
	res.write("Our Developers are working on it, will come back soon");
	res.end();
}

var dir = __dirname;//builtin variable for UR Current directory....

http.createServer((req, res)=>{
	var url = req.url;
	res.writeHead(200, {'Content-type' : 'text/html'});
	var parsedUrl = parse(url);
	var completePath = join(dir, parsedUrl.pathname);
	//console.log(completePath);
	var content = "";
	if(req.url != '/favicon.ico'){
		switch(req.url){
			case "/":
				completePath = join(dir,"UserRegistration.html");
				var stream = fs.createReadStream(completePath).pipe(res);
				return;
			case "/DAC":
				content = "<h1>DAC Page</h1>";
				break;
			default:
				errorPage(res);
		}
	}
	res.end(content);
}).listen(1234);