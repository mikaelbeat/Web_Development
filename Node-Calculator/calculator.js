//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Calculator Section

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of calculation is " + result);

});

// Calculator Section


// BMI Calculator Section

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = parseFloat(weight / (height * height));
  res.send("For given weight " + weight + " and " + height + " BMI is " + bmi + ".");

});

// BMI Calculator Section

app.listen(3000, function(){
  console.log("Starting calculator server at port 3000.");
});
