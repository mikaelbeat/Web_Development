//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.listen(3000, function(){
  console.log("Server for todo-list started at port 3000.");
});

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0){
    res.send("<h1>Yay it's the weekend!</h1>");
  } else {
    res.send("<h1>Boo! I have to work!</h1>");
  }

});


// Lecture 230 , 6:14
