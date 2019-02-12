//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(process.env.PORT || 3000, function(){
  console.log("Server for Newsletter-Signup is running.");
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
      "Authorization": "MikaelBeat a7a30494746fe8099d0929ff09eaf1df-us20"
    },
    body: jsonData
  };

  request(options, function(error, response, body){
    if (error){
      res.sendFile(__dirname + "/failure.html");
    } else {
      if (response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }

    }
  });

});

app.post("/failure", function(req, res){
  res.redirect("/");
});
