var str = require('http');  

var server = str.createServer(function(req,res){
	console.log("req received");
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>Hello from Node Js</h1>");
	res.end();   
});

server.listen(9000, function(){
	console.log("server started at 9000");
})
