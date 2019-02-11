//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
  console.log("Server for Newsletter-Signup is running on port 3000");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var emailAddress = req.body.emailAddress;

  console.log("First name: " + firstName);
  console.log("Last name: " + lastName);
  console.log("Email address: " + emailAddress);

});
