//gets all the information under "jumper" on the html page
var jumper=document.getElementById("jumper");
jumper.style.position="absolute";

//gets all the information under "duplicate" on the html page
var duplicate=document.getElementById("duplicate");
duplicate.style.position="absolute";

//gets all the information under "duplicateTwo" on the html page
var duplicateTwo=document.getElementById("duplicateTwo");
duplicateTwo.style.position="absolute";

var duplicateThree=document.getElementById("duplicateThree");
duplicateThree.style.position="absolute";

//gives button random coordinates everytime the mouse moves
jumper.addEventListener("mousemove",function(){
    jumper.style.top=Math.random() * 600 + "px";
    jumper.style.left=Math.random() * 600 + "px";
    duplicate.style.top=Math.random() * 600 + "px";
    duplicate.style.left=Math.random() * 600 + "px";
    duplicateTwo.style.top=Math.random() * 600 + "px";
    duplicateTwo.style.left=Math.random() * 600 + "px";
    duplicateThree.style.top=Math.random() * 600 + "px";
    duplicateThree.style.left=Math.random() * 600 + "px";
});

//makes duplicate appear after "jumper" is hovered on
jumper.addEventListener("mousemove",function(){
    duplicate.style.display="block";
});

//makes duplicateTwo and appear after "duplicate" is hovered on and makes jumper move too
duplicate.addEventListener("mousemove",function(){
   duplicateTwo.style.display="block";
    jumper.style.top=Math.random() * 600 + "px";
    jumper.style.left=Math.random() * 600 + "px";
    duplicate.style.top=Math.random() * 600 + "px";
    duplicate.style.left=Math.random() * 600 + "px";
    duplicateTwo.style.top=Math.random() * 600 + "px";
    duplicateTwo.style.left=Math.random() * 600 + "px";
    duplicateThree.style.top=Math.random() * 600 + "px";
    duplicateThree.style.left=Math.random() * 600 + "px";
});

//makes duplicateThree appear after duplicateTwo is hovered on
duplicateTwo.addEventListener("mousemove",function(){
    duplicateThree.style.display="block";
    jumper.style.top=Math.random() * 600 + "px";
    jumper.style.left=Math.random() * 600 + "px";
    duplicate.style.top=Math.random() * 600 + "px";
    duplicate.style.left=Math.random() * 600 + "px";
    duplicateTwo.style.top=Math.random() * 600 + "px";
    duplicateTwo.style.left=Math.random() * 600 + "px";
    duplicateThree.style.top=Math.random() * 600 + "px";
    duplicateThree.style.left=Math.random() * 600 + "px";
}); 

//makes jumper move when duplicateThree is hovered on
duplicateThree.addEventListener("mousemove", function(){
    jumper.style.top=Math.random() * 600 + "px";
    jumper.style.left=Math.random() * 600 + "px";
    duplicate.style.top=Math.random() * 600 + "px";
    duplicate.style.left=Math.random() * 600 + "px";
    duplicateTwo.style.top=Math.random() * 600 + "px";
    duplicateTwo.style.left=Math.random() * 600 + "px";
    duplicateThree.style.top=Math.random() * 600 + "px";
    duplicateThree.style.left=Math.random() * 600 + "px";
});
