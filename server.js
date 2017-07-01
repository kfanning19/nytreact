// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var port = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("./public"));

var controller = require("./controllers/controller.js")(app);


app.listen(port, function() {
  console.log("App running on port 3000!");
});