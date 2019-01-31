
var randomNumber = 0;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userCLickedPattern = [];

function nextSequence(){
  randomNumber = Math.floor(Math.random() * 4);
}

nextSequence();
var randomChosenColour = buttonColours[randomNumber];

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

$("button").click(function(){

})

console.log(randomNumber);
console.log(randomChosenColour);
