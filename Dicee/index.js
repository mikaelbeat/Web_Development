
// Dice numbers
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Header to display winner
var winnerHeader = document.querySelector(".container h1");

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Check to declare winner
if (randomNumber1 > randomNumber2) {
  winnerHeader.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  winnerHeader.textContent = "Player 2 Wins!";
} else {
  winnerHeader.textContent = "Draw!";
}
