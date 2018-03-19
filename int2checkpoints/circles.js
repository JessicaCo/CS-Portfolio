/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


var xPos = 0;
var yPos = 0;
var weight = 2;
var r=0;
var g=210;
var b=247;

draw = function() {

    //blue circles top left to bottom right//
    strokeWeight(weight);
    stroke(0,0,0);
    fill(r,g,b);
    ellipse(xPos,yPos,30,30);
    xPos=xPos+15;
    yPos=yPos+20;
    

    //thicker purple circles bottom left to top right//
    strokeWeight(weight);
    stroke(0,0,0);
    fill(r,g,247);
    ellipse(xPos,width-yPos,30,30);
    weight++;
    r=r+20;
    g=g-40;
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
