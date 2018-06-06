// potential dropdowns
var button = document.getElementById("mainButton");
var mainDropdown = document.getElementById("mainDropdown");
var butterfly = document.getElementById("butterfly");
var butterflyDropdown = document.getElementById("sub-dropdownButterfly");
var flower = document.getElementById("flower");
var flowerDropdown = document.getElementById("sub-dropdownFlower");

// options in the dropdown
var ladybugButton = document.getElementById("ladybug");
var dragonflyButton = document.getElementById("dragonfly");
var output = document.getElementById("output");
var butterflyYellow = document.getElementById("orangeButterfly");
var butterflyPink = document.getElementById("pinkButterfly");
var flowerWhite = document.getElementById("whiteFlower");
var flowerPink = document.getElementById("pinkFlower");
var flowerDark = document.getElementById("darkFlower");
var flowerViolet = document.getElementById("violetFlower");

//sets the default position and visibility for each secondary dropdown element
mainDropdown.style.position = "fixed";
mainDropdown.style.visibility = "hidden";
butterflyDropdown.style.position = "fixed";
butterflyDropdown.style.visibility = "hidden";
flowerDropdown.style.position = "fixed";
flowerDropdown.style.visibility = "hidden";

//makes the next level visible when mouse goes over "--select--"
button.addEventListener("mouseover",function() {
    mainDropdown.style.top = button.getBoundingClientRect().bottom + "px"; //makes list dropdown below main
    mainDropdown.style.left = button.getBoundingClientRect().left + "px";

    mainDropdown.style.visibility = "visible";
    
    butterfly = document.getElementById("butterfly");
});

//makes dropdown disappear when mouse leaves the main dropdown
button.addEventListener("mouseout", function() {
    mainDropdown.style.visibility = "hidden";
});

//makes butterfly dropdown appear when mouse goes over butterfly
butterfly.addEventListener("mouseover", function() {
    butterflyDropdown.style.top = butterfly.getBoundingClientRect().top + "px";
    butterflyDropdown.style.left = butterfly.getBoundingClientRect().right + "px";
    butterflyDropdown.style.visibility = "visible";
});

//makes the butterfly dropdown disappear when mouse is no longer over it
butterfly.addEventListener("mouseout", function() {
    butterflyDropdown.style.visibility = "hidden";
});



//makes flower dropdown appear when the mouse goes over the flower
flower.addEventListener("mouseover", function() {
    flowerDropdown.style.left = flower.getBoundingClientRect().right + "px";
    flowerDropdown.style.top = flower.getBoundingClientRect().top + "px";
    flowerDropdown.style.visibility = "visible";
});

//makes flower dropdown disappear when mouse leaves
flower.addEventListener("mouseout", function() {
    flowerDropdown.style.visibility = "hidden";
});

//all of the following code changes the "--select--" to what they selected
ladybugButton.addEventListener("click", function() {
   output.innerHTML = "ladybug"; 
});

dragonflyButton.addEventListener("click", function() {
    output.innerHTML = "dragonfly";
});

butterflyYellow.addEventListener("click", function() {
   output.innerHTML = "yellow butterfly"; 
});

butterflyPink.addEventListener("click", function() {
   output.innerHTML = "pink butterfly"; 
});

flowerWhite.addEventListener("click", function() {
   output.innerHTML = "white flower";
});

flowerPink.addEventListener("click", function() {
   output.innerHTML = "pink flower"; 
});

flowerDark.addEventListener("click", function() {
   output.innerHTML = "dark pink flower";
});

flowerViolet.addEventListener("click", function() {
    output.innerHTML = "violet flower";
});