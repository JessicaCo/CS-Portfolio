/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1100, 550);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//



draw = function() {
    //dragonfly
    background(54,73,57);
        //main body
        fill(137, 65, 145);
        stroke(137, 65, 145);
        ellipse(220, 150, 150, 15);//body
        ellipse(150, 150, 30, 30);//head
        ellipse(180, 150, 40, 30);//mid-body
        
        //antennae
        noFill();
        stroke(0, 0, 0);
        strokeWeight(1);
        bezier(138, 140, 31, 101, 123, 83, 99, 111);//left 
        bezier(138, 160, 31, 199, 123, 217, 99, 188);//right
        
        //color for wings
        stroke(128, 142, 160);
        fill(206, 227, 255, 75);
        
        //top right wing
        pushMatrix();
        translate(197, 88);
        rotate(0.3);
        //wings
        ellipse(0, 0, 30, 130);
        popMatrix();
        
        //top left wing
        pushMatrix();
        translate(157, 88);
        rotate(-0.3);
        ellipse(0, 0, 30, 130);
        popMatrix();
        
        //bottom right wing
        pushMatrix();
        translate(194, 212);
        rotate(2.9);
        ellipse(0, 0, 30, 130);
        popMatrix();
        
        //bottom left wing
        pushMatrix();
        translate(160, 212);
        rotate(-2.9);
        ellipse(0, 0, 30, 130);
        popMatrix(); 
    
    //butterfly orange yellow
        fill(255, 212, 25);
        stroke(255, 166, 24);
        strokeWeight(3);
        
        //top right wing
        pushMatrix();
        translate(180, 350); 
        rotate(0.8);
        ellipse(0, 0, 30, 55);
        popMatrix();
        
        //top left wing
        pushMatrix();
        translate(137, 345);
        rotate(-0.3);
        //wings
        ellipse(0, 0, 40, 70);
        popMatrix();
        
        //bottom right wing
        pushMatrix();
        translate(179, 400);
        rotate(-0.8);  
        //wings
        ellipse(0, 0, 30, 55);
        popMatrix();
        
        //bottom left wing
        pushMatrix();
        translate(137, 405);
        rotate(-2.8);
        //wings
        ellipse(0, 0, 40, 70);
        popMatrix(); 
        
        fill(0,0,0);
        stroke(0,0,0);
        ellipse(150, 375, 80, 10);
        ellipse(120, 375, 20, 20);
        
        //antennae
        noFill();
        stroke(0, 0, 0);
        strokeWeight(1);
        bezier(115, 375, 42, 333, 119, 324, 102, 353);//left 
        bezier(115, 375, 42, 417, 119, 426, 102, 397);//right 
        
    //butterfly pink purple
        fill(206, 105, 146);
        stroke(112, 0, 46);
        strokeWeight(3);
        
        //top right wing
        pushMatrix();
        translate(380, 350); 
        rotate(0.8);
        ellipse(0, 0, 30, 55);
        popMatrix();
        
        //top left wing
        pushMatrix();
        translate(337, 345);
        rotate(-0.3);
        ellipse(0, 0, 40, 70);
        popMatrix();
        
        //bottom right wing
        pushMatrix();
        translate(379, 400);
        rotate(-0.8);  
        //wings
        ellipse(0, 0, 30, 55);
        popMatrix();
        
        //bottom left wing
        pushMatrix();
        translate(337, 405);
        rotate(-2.8);
        //wings
        ellipse(0, 0, 40, 70);
        popMatrix(); 
        
        fill(0,0,0);
        stroke(0,0,0);
        ellipse(350, 375, 80, 10);
        ellipse(320, 375, 20, 20);
        
        //antennae
        noFill();
        stroke(0, 0, 0);
        strokeWeight(1);
        bezier(315, 375, 242, 333, 319, 324, 302, 353);//left 
        bezier(315, 375, 242, 417, 319, 426, 302, 397);//right 
        
    //flowers
        //white flower
        //center
        noStroke();
        fill();
        ellipse(400, 200, 30, 30);//background
        
        //petals
        fill(255, 255, 255);
        ellipse(400, 180, 22, 22);//top
        ellipse(400, 220, 22, 22);//bottom
        ellipse(419, 190, 22, 22);//top right
        ellipse(419, 210, 22, 22);//bottom right
        ellipse(381, 190, 22, 22);//top left
        ellipse(381, 210, 22, 22);//bottom right
        
        //center
        fill(252, 255, 109);
        ellipse(400, 200, 20, 20);
        
        //pink flower
        fill(250, 118, 252);
        ellipse(350, 150, 30, 30);
        
        //petals
        fill(250, 118, 252);
        ellipse(350, 130, 22, 22);
        ellipse(350, 170, 22, 22);
        ellipse(369, 140, 22, 22);
        ellipse(369, 160, 22, 22);
        ellipse(331, 140, 22, 22);
        ellipse(331, 160, 22, 22);
        
        //background 
        fill(250, 118, 252);
        ellipse(350, 150, 30, 30);
        
        //center 
        fill(252, 255, 109);
        ellipse(350, 150, 20, 20); 
        
        //violet flower
        
        //petals
        fill(55, 49, 84)
        ellipse(300, 80, 22, 22);
        ellipse(300, 120, 22, 22);
        ellipse(319, 90, 22, 22);
        ellipse(319, 110, 22, 22);
        ellipse(281, 90, 22, 22);
        ellipse(281, 110, 22, 22);
        
        //background
        fill(55, 49, 84); 
        ellipse(300, 100, 30, 30);
        
        //center 
        fill(252, 255, 109);
        ellipse(300, 100, 20, 20); 
        
        //dark pink flower
        
        //petals
        fill(130, 0, 54)
        ellipse(400, 80, 22, 22);
        ellipse(400, 120, 22, 22);
        ellipse(419, 90, 22, 22);
        ellipse(419, 110, 22, 22);
        ellipse(381, 90, 22, 22);
        ellipse(381, 110, 22, 22);
        
        //background
        fill(130, 0, 54); 
        ellipse(400, 100, 30, 30);
        
        //center 
        fill(352, 255, 109);
        ellipse(400, 100, 20, 20);
}; 


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
