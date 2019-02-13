//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(3000, function(){
  console.log("Server for todo-list started at port 3000.");
});

app.get("/", function(req, res){

  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newItems: items});

});

app.post("", function(req, res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});


// Lecture 230 , 6:14
