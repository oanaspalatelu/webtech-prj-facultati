var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var models  = require('./models');

// define entity
var Article = models.Article;


// init express application
var app = express();
app.use(bodyParser.json());
app.use(cors());

// REST methods
app.use(require("./routes/articles.js"));
app.use(require("./routes/mails.js"));


// include static files in the admin folder
app.use('/univ', express.static('univ'));
app.use(express.static('app'));







app.listen(process.env.PORT);