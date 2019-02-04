
//jshint esversion:6

const express = require("express");
const app = express();

let request = "This is my request for server!";

app.get("/", function(req, res){
  res.send("<h1>This is server response!</h1>");
});

app.get("/contact", function(req, res){
  res.send("You can contact me at email@gmail.com");
});

app.get("/about", function(req, res){
  res.send("This page is owned by MikaelBeat.");
});

app.get("/hobbies", function(req, res){
  res.send("<h1>Hobbies</h1><ul><li>Code</li><li>Beer tasting</li>")
});

app.listen(3000, function(){
  console.log("Server started on port 3000.")
  console.log("Request: " + request)
});
