// Creates variables and saves DOM elements to each
var newBGColor=document.getElementById("newBGColor");
var colorChangeButton=document.getElementById("colorChangeButton");

//Event listener for button. It will set the background color to what the user inputs
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;    
}); 

