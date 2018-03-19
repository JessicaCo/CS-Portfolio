/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(255, 221, 229);

//table
stroke(81, 68, 48);
fill(255, 243, 198);
rect(0, 300, 399, 99);
//side of table
stroke(81, 68, 48);
fill(181, 151, 105);
rect(0, 374, 399, 25);


//base of plate
stroke(0, 0, 0);
fill(255, 255, 255);
ellipse(200, 340, 130, 30);

//plate
stroke(0, 0, 0);
fill(255, 255, 255);
ellipse(200, 330, 145, 40);

//inside of a plate
stroke(0, 0, 0);
fill(242, 242, 242);
ellipse(200, 335, 105, 20);


//to draw cookies
cookie = function(x, y) {
    stroke(0, 0, 0);
    fill(239, 178, 47);
    ellipse (x, y, 50, 20);
    ellipse (x, y, 1, 1);
    ellipse (x+5, y+5, 1, 1);
    ellipse (x+6, y-5, 1, 1);
    ellipse (x+19, y-1, 1, 1);
    ellipse (x-16, y, 1, 1);
    ellipse (x-9, y-5, 1, 1);
    ellipse (x-7, y+6, 1, 1);
    ellipse (x+13, y+2, 1, 1);
};

mouseClicked = function() {
    cookie (mouseX, mouseY);
};


//bottom of cup
fill(237, 246, 255)
ellipse(320, 320, 35, 10);

rect(302, 280, 35, 38);
ellipse(320, 280, 35, 10);

//milk
noStroke();
fill(255, 255, 255);

rect(303, 295, 34, 25);

ellipse(320, 318, 35, 10);

stroke(229, 229, 229);
ellipse(320, 295, 33, 10);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
