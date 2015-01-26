var http = require('http');

var content = "Nguyễn Đức Trung";

content += " xin chao";

var document = "<!DOCTYPE html><html xmlns=\"http://www.w3.org/1999/xhtml\"><title>ABC</title><body>" + content + "</body></html>";

http.createServer(function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeHead(200, {'Content-Type': 'application/xhtml+xml; charset=utf-8'});
    response.end(document+'\n');
}).listen(8080);

console.log('Server started');
