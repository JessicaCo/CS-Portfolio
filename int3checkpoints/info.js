// Creates variables and saves DOM elements to each
var eeyore=document.getElementById("eeyore");
var tigger=document.getElementById("tigger");
var display=document.getElementById("display");

eeyore.addEventListener("click", function(){
    display.innerHTML = "baby eeyore";
});

tigger.addEventListener("click", function(){
    display.innerHTML = "baby tigger";
});
