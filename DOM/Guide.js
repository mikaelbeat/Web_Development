
document.querySelector("h1").innerHTML = "Suffeli";
document.querySelector("h1").style.color = "red";

// Returns array, changing its style is not possible
document.getElementsByTagName("li");

// Styles can be changed when element is specified in array
document.getElementsByTagName("li")[2].style.color = "yellow";
document.getElementsByTagName("li").length;
document.getElementsByClassName("btn")[0].style.backgroundColor = "green";

document.getElementById("title");
document.getElementById("title").innerHTML = "Good Bye";

document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("input");

// When selection tag which is nested in tag
document.querySelector("li a");
// When selection tag which is at same level as parent tag <li class="list">
document.querySelector("li.list");
// If there is multiple matches for query, only one is returned
document.querySelector("#list .list");
// If there is multiple matches all will be returned
document.querySelectorAll("#list .list");

// When changing document properties using javascript
// attributes needs to be defined in camelCase
document.querySelector("h1").style.fontSize = "5em";
document.querySelector("h1").style.padding = "10%";
document.querySelector(".btn").style.backgroundColor = "yellow";

// Adds given class to selected object
document.querySelector("button").classList.add("invinsible");

// Remove given class from selected object
document.querySelector("button").classList.remove("invinsible");

document.querySelector("h1").innerHTML;
document.querySelector("h1").textContent = "Tsau";

// Changes inner html in h1 to cursive
document.querySelector("h1").innerHTML = "<em>Hello</em>";

document.querySelector("a");
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");
