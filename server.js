var express = require('express');

var app = express();
var port = 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res) {
    res.render('test express server');
});

app.listen(port, function() {
    console.log('Express server started to http://localhost:' + port);
});
