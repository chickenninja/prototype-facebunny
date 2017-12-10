var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: true}));

// home page 
app.get('/', function(req, res) {
    res.render('content/index');
});

app.get('/home', function(req, res) {
    res.render('content/home');
});

app.listen(3000);
console.log('Running on 3000');
