var express = require('express');
var app = new express();

var port = process.env.PORT || 8080;

var crypto = require('crypto');
var uCrypt = require('./app/ucrypt');
var ucrypt = new uCrypt();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.get('/encrypt', function(req, res) {

	if(!req.query.password)
		res.status(404).json({ error: 'message' });

	var hash = ucrypt.encrypt(req.query.password);

    res.status(200).send(hash);
});

app.get('/decrypt', function(req, res) {

	if(!req.query.myhash)
		res.status(404).json({ error: 'message' });

	var password = ucrypt.decrypt(req.query.myhash);

    res.status(200).send(password);
});


app.listen(port, function() {
	console.log('we now listen:' + port);
});	 