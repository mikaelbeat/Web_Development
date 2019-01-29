
$(document).ready(function(){

  // Selects all or one element which is h1 and changes its css value
  $("h1").css("color","red");
  $("button");

  // Adds selected element to a given class
  $("h1").addClass("big-title margin-50");

  //$("h1").removeClass("big-title");

  // Changes given element to given text
  $("h1").text("Bye");

  // Using .html also html code can be added to selected element
  $("button").html("<em>Dont click me!</em>")

  // Gets element information when only one css value is given
  console.log($("h1").css("font-size"));

  // In console checks if given element has given class applied
  $("h1").hasClass("margin-50");

  console.log($("img").attr("src"));

  // Selects all a elements and changes href to given url
  $("a").attr("href","https://yahoo.com");

  // Logs to console given element all classes
  console.log($("h1").attr("class"));

  // Adding click listener
  $("h1").click(function(){
    $("h1").css("color", "purple");
    $("h2").show();
  })

  $("button").click(function(){
    $("h1").css("color", "green");
  })

  $("input").keypress(function(event){
    console.log(event.key);
  })

  $("input").keypress(function(event){
    $("h1").text(event.key);
  })

  $("h1").on("mouseover", function(){
    $("h1").css("color", "orange");
  })

  // Adding new HTML element using JQuery
    // prepend -> Adds element just before selected element
    // append -> Adds element just after selected element
  $("h1").before("<button>New</button>");

  // Remove all button elements
  // $("button").remove();

  $("button").on("click", function(){
    $("h2").fadeToggle();
    // $("h2").on("click", function(){
    //  $("h1").animate({opacity: 0.5});
  })

});
