var app = require('express')(),
    server = require('http').createServer(app),
    fs = require('fs');
server.listen(8080);

path = "./twitter-bootstrap/";

var files = {};

["TwitterBootstrap.html","index.html"].forEach(function(file){
    files["/"+file] = fs.readFileSync(path+file,"utf8");
});

app.use(function(req,res){
   console.log("req.path = " + req.path);
   if (files[req.path]) {
      res.end(files[req.path]);
   } else {
      files[req.path] = fs.readFileSync(path+req.path,"utf8");
      res.end(files[req.path]);
   }
});
