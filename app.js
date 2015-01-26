var http = require('http');

var content = "<!DOCTYPE html><html xmlns=\"http://www.w3.org/1999/xhtml\"><title>ABC</title><body>Nguyễn Đức Trung</body></html>";

http.createServer(function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeHead(200, {'Content-Type': 'application/xhtml+xml; charset=utf-8'});
    response.end(content+'\n');
}).listen(8080);

console.log('Server started');
