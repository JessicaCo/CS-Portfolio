/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1100, 550);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
noStroke();
    fill(0, 0, 0);
    ellipse(190, 190-30, 50, 50);//head
    fill(255, 50, 0);
    ellipse(190, 190, 80, 80);//body
    fill(0, 0, 0);
    ellipse(190-12, 190-26, 15, 15);//top left dot
    ellipse(190-28, 190, 15, 15);//mid left dot
    ellipse(190-15, 190+23, 15, 15);//bottom left dot
    ellipse(190+12, 190-26, 15, 15);//top right dot
    ellipse(190+28, 190, 15, 15);//mid right dot
    ellipse(190+15, 190+23, 15, 15);//bottom right dot
    ellipse(190+1, 190-4, 15, 15);//middle dot right
    ellipse(190-1, 190-4, 15, 15);//middle dot left
    triangle(190+5, 190+39, 190-5, 190+40, 190, 190-40);//inside
    
    //ladybug's antennas
    noFill();
    stroke(0, 0, 0);
    strokeWeight(1);
    bezier(190-13, 190-51, 190-40, 190-119, 190-47, 190-51, 190-35, 190-62);//left 
    bezier(190+13, 190-51, 190+40, 190-119, 190+47, 190-51, 190+35, 190-62);//right
}
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);