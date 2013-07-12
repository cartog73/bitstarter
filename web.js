

var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var indexbuf = fs.readFileSync("index.html"); //or try reading with option "utf8"

app.get('/', function(request, response) {
  response.send(indexbuf.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
