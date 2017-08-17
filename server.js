var express = require('express');

var app = express();
var port = 8080;

app.set('view engine', 'ejs');

//app.use(express.static(__dirname + '/build'));

/*const pages = {[
	{home: {
		visible: true,
		uri: "/"
	}},
	{about: {
		visible: true,
		uri: "/about"
	}},
	{contact: {
		visible: true,
		uri: "/contact"
	}},
	{found404: {
		visible: false,
		uri: "/notFound.html"
	}}
]};*/

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
})

app.get('/contact', (req, res) => {
	res.render('contact');
})

app.listen(port, function() {
    console.log('Express server started to http://localhost:' + port);
});
