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

  var data = {
    members: [
      {email_address: emailAddress,
      status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName
    }}
    ]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/b7d7d5afc1",
    method: "POST",
    headers: {
      "Authorization": "MikaelBeat 55cdc45405226b91749bb62da88e8c6e-us20"
    },
    body: jsonData
  };

  request(options, function(error, response, body){
    if (error){
      console.log("Error:  " + error);
    } else {
      console.log("Status code: " + response.statusCode);
    }
  });

  console.log("First name: " + firstName);
  console.log("Last name: " + lastName);
  console.log("Email address: " + emailAddress);

});





// 55cdc45405226b91749bb62da88e8c6e-us20
// b7d7d5afc1
