var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var fs = require('fs');
    var indexbuf = fs.readFileSync("index.html"); //or try reading with option "utf8"
    response.send(indexbuf.toString("utf8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
