var express = require("express");
var exphbs = require("express-handlebars");
const morgan = require("morgan");
var port = process.env.PORT || 3000;

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("assets"));
// app.use(morgan("dev"));

app.use("/assets", express.static(__dirname + "/assets"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/detail", function (req, res) {
  console.log(req.query);

  res.render("detail", req.query);
});

app.listen(port);
