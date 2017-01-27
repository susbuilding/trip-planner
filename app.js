const express = require("express");
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const fs = require('fs');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', router);

router.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.redirect('/home');
});

app.listen(3000, function () {
	console.log('Server is listening on port 3000!');
});

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	console.error(err);
	res.render('error', { error: err })
});

module.exports = app;