//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = [];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(3000, function(){
  console.log("Server for todo-list started at port 3000.");
});

app.get("/", function(req, res){

  const day = date.getDay();
  res.render("list", {listTitle: day, newItems: items});

});

app.post("", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newItems: workItems});
});

app.get("/about",function(req, res){
  res.render("about");
});
