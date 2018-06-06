/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1100, 550);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw=function(){
            //dragonfly
              
            //main body
            fill(137, 65, 145);
            stroke(137, 65, 145);
            ellipse(220, 220-70, 150, 15);//body
            ellipse(220-70, 220-70, 30, 30);//head
            ellipse(220-40, 220-70, 40, 30);//mid-body
            
            //antennae
            noFill();
            stroke(0, 0, 0);
            strokeWeight(1);
            bezier(220-82, 220-80, 220-189, 220-119, 220-97, 220-137, 220-121, 220-109);//left 
            bezier(220-82, 220-60, 220-189, 220-21, 220-97, 220-3, 220-121, 220-32);//right
            
            //color for wings
            stroke(128, 142, 160);
            fill(206, 227, 255, 75);
            
            //top right wing
            pushMatrix();
            translate(220-23, 220-132);
            rotate(0.3);
            ellipse(0, 0, 30, 130);
            popMatrix();
            
            //top left wing
            pushMatrix();
            translate(220-63, 220-132);
            rotate(-0.3);
            ellipse(0, 0, 30, 130);
            popMatrix();
            
            //bottom right wing
            pushMatrix();
            translate(220-26, 220-8);
            rotate(2.9);
            ellipse(0, 0, 30, 130);
            popMatrix();
            
            //bottom left wing
            pushMatrix();
            translate(160, 212);
            rotate(-2.9);
            ellipse(0, 0, 30, 130);
            popMatrix();
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

