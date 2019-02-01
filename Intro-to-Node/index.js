//jshint esversion:6

var superheroes = require("superheroes");
const supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
const mySuperVillainName = supervillains.random();

console.log("My superhero name is " + mySuperheroName + ".");
console.log("My supervillain name is " + mySuperVillainName + ".");
