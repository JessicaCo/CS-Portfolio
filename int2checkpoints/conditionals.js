/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background();


 mouseClicked=function() {
    fill (0, 0, 0);
    // loop();
    ellipse (pmouseX, pmouseY, 30, 30);
     };
keyPressed=function() {
    fill (0, 0, 0);
    stroke (0, 0, 0);
    srtokeWeight(3);
    ellipse (pmouseX, pmouseY, 30, 30);
}
draw = function() {
    frameRate(20)
    //to stop circle
    //background ();
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
    
    
        
        //splits screen and changes color based on mouseX position
        //red
        if (mouseX>320) {
            fill(255, 96, 96);
            stroke(200,20,30);
            strokeWeight(3);
        }
        
        //yellow
        else if (mouseX>240) {
            fill(255, 252, 112);
            stroke(193, 109, 0);
            strokeWeight(3);
        }
        
        //green
        else if (mouseX>160) {
            fill(110, 244, 66);
            stroke(74, 104, 4);
            strokeWeight(3);
        }
        
        //blue
        else if (mouseX>80) {
            fill(140, 207, 255);
            stroke(0, 65, 140);
            strokeWeight(3);
        }
        
        //purple
        else if (mouseX<80){
            fill(218, 160, 255);
            stroke(73, 38, 109);
            strokeWeight(3);
        }

    // if (mouseIsPressed){
    //     fill(0,0,0);
    //     stroke(0,0,0);
    //     strokeWeight(3);
    // }


};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
