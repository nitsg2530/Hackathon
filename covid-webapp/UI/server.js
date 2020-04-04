
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules/@livechat/livechat-visitor-sdk/dist'));

app.get("/", function (request, response) {
	console.log(__dirname);
  response.sendFile(__dirname + '/index.html');
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + 3000);
});