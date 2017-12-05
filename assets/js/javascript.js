//Array string of variables
var animals = ["dog", "cat", "cow", "bird", "horse", "elephant", "peacock"];
//Listening for click event on button
$("button").on("click", function() {
// Storing the value of "data-animal" from the button which was clicked
var animal = $(this).attr("data-animal");
console.log(this);
//Running query URL
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
animal + "&api_key=dc6zaTOxFJmzC&limit=20";

$.ajax({
  url: queryURL,
  method: "GET"
})
.done(function(response) {
//Storing data
var results = response.data;
//Creating a loop for data, b/c data is an array to display 
for (var i = 0; i < results.length; i++) {
//Creating a div with a class of 'item' and store into variable
var gifDiv = $("<div class='item'>");
//Storing the rating from results, accessing index of results array, access specific property and storing
var rating = results[i].rating;
//Creating paragraph tag for later use in variable "<p>", selecting is just "p"
var p = $("<p>").text("Rating: " + rating);
//Creating image called personImage, add attribute here to add the source to the image tag
var animalImage = $("<img>");
//Fixed height is part of the property to access
animalImage.attr("src", results[i].images.fixed_height.url);
//Adding "p" tag created above
gifDiv.prepend(p);
gifDiv.prepend(animalImage);
//Access existing gifs from DOM to prepend and make it show onto the page
$("#gifs-appear-here").prepend(gifDiv);
}
});
});

var state = $(this).attr("data-state");
console.log(this);

if(state === "still"){
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
} else{
$(this).attr("src", $(this).attr("data-still"));  
$(this).attr("data-state", "still");
}