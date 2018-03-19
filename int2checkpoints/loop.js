/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1000, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(255, 255, 255);

// var r=random(255);
// var g=random(255);
// var b=random(255);

     
draw = function() {
    for(var i=0; i<width; i+=30) {
        for (var j=0; j<height; j+=30) {
        noStroke();
        var size = random(30);
        fill(220, g=random(255), 220);
        ellipse(i, j, size, size);
        fill(0, 0, 0);
        textSize(100);
        text("Thing 1", 320, 500);
            keyPressed=function() {
            fill(0, 0, 0);
            textSize(50);
            // text("thing uno", 480, 450);
            text(key, mouseX, mouseY);
            };
     }
    }

};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
