var http = require('http');
var colors=require('colors');

http.createServer(function(req, res){
	//서버작업
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hello World</h1>');

}).listen('8888', function(){ //8888포트에 서버 열겠다
	console.log('create server!!!'.green);
});