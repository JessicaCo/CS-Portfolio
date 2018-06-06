/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1100, 550);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var x = 0; // X position for the ant
        var pinkFlowers = [];//contains pinkFlower x, y, and object

        draw = function() {

            drawBackground(); //draws background

            noStroke(); //takes out stroke for all elements of background 

            //draws ant
            if (x < width) {
                fill(0, 0, 0);
                ellipse(x, 500, 4, 4);
                ellipse(x + 4, 500, 4, 4);
                ellipse(x + 8, 500, 5, 5);
                stroke(0, 0, 0);
                strokeWeight(1);
                line(x + 8, 500, x + 12, 497);
                line(x + 8, 500, x + 12, 503);
            }
 
            else if (x > width) { //resets ant
                x -= 1100;
            }
            x = x + 1; //animates ant

            leaves(); //draws leaves in foreground
            
            //draws pinkFlower and keeps it where it is drawn
            for (var i = 0; i < pinkFlowers.length; i++) {
                pinkFlower(pinkFlowers[i].x, pinkFlowers[i].y, pinkFlowers[i].angle);
            }
        };
        
function pinkFlower(x, y, angle) {

        pushMatrix(); //backsup current display matrix
        translate(x, y); //sets (0,0) to mouse
        rotate(angle); //assigns random angle to rotate at

        //white flower
        //center
        noStroke();
        fill();
        fill(250, 118, 252);
        ellipse(0, 0, 30, 30);//background
        
        //petals
        fill(250, 118, 252);
        ellipse(0, 0-20, 22, 22);//top
        ellipse(0, 0+20, 22, 22);//bottom
        ellipse(0+19, 0-10, 22, 22);//top right
        ellipse(0+19, 0+10, 22, 22);//bottom right
        ellipse(0-19, 0-10, 22, 22);//top left
        ellipse(0-19, 0+10, 22, 22);//bottom right
        
        //center
        fill(252, 255, 109);
        ellipse(0, 0, 20, 20); 
            
        popMatrix();
        }
        
//to make pinkFlower appear when mouse is clicked        
mouseClicked = function() {
    pinkFlowers.push({ x: mouseX, y: mouseY, angle: random(6.28) });
    };

        function drawBackground() {
            //dirt
            fill(163, 105, 50);
            rect(0, 0, 1100, 550);

            //pond
            noStroke();
            fill(123, 212, 242);
            ellipse(750, 200, 400, 350);
            ellipse(600, 170, 275, 275);

            // draws rock    
            // stroke(89, 88, 88);
            fill(165, 165, 165);
            ellipse(668, 43, 20, 20);
            ellipse(693.5, 34, 35, 35);
            ellipse(725, 28, 30, 30);
            ellipse(772, 23, 70, 70);
            ellipse(823, 35, 35, 35);
            ellipse(846, 43, 15, 15);
            ellipse(935, 120, 50, 50);
            ellipse(952, 185, 85, 85);
            ellipse(911, 95, 20, 20);
            ellipse(880, 65, 65, 65);
            ellipse(948, 241, 30, 30);
            ellipse(936, 284, 60, 60);
            ellipse(910, 310, 15, 15);
            ellipse(895, 322, 25, 25);
        }

        function leaves() {
            //little top left
            noStroke();
            fill(83, 196, 7);
            ellipse(190, 100, 30, 30);
            triangle(179, 111, 200, 120, 205, 101);
            fill(32, 79, 1);
            triangle(130, -15, 200, 120, 145, 0);

            //big leaf in bottom left corner 
            fill(83, 196, 7);
            ellipse(150, 400, 300, 300);
            triangle(139, 250, 350, 250, 292, 450);
            fill(32, 79, 1);
            triangle(0, 480, 350, 250, 0, 550);

            //top left
            fill(83, 196, 7);
            ellipse(75, 75, 175, 175);
            triangle(72, 163, 166, 160, 161, 55);
            fill(32, 79, 1);
            triangle(0, -15, 166, 160, -15, 0);

            //right of top left
            fill(83, 196, 7);
            ellipse(200, 40, 75, 75);
            triangle(188, 76, 230, 85, 238, 37);
            fill(32, 79, 1);
            triangle(180, -15, 230, 85, 175, 0);

            //semi-large bottom left leaf
            fill(83, 196, 7);
            ellipse(460, 450, 150, 150);
            triangle(395, 412, 430, 350, 508, 392);
            fill(32, 79, 1);
            triangle(500, 550, 430, 350, 480, 550);

            //second bottom left leaf
            fill(83, 196, 7);
            ellipse(350, 380, 110, 110);
            triangle(280, 412, 350, 290, 400, 356);
            fill(32, 79, 1);
            triangle(350, 550, 350, 290, 370, 550);

            //second bottom right leaf
            fill(83, 196, 7);
            ellipse(800, 480, 110, 110);
            triangle(746, 492, 740, 420, 813, 426);
            fill(32, 79, 1);
            triangle(850, 550, 740, 420, 870, 550);

            //big bottom right leaf
            fill(83, 196, 7);
            ellipse(980, 450, 170, 170);
            triangle(911, 400, 1020, 280, 1062, 426);
            fill(32, 79, 1);
            triangle(940, 550, 1020, 280, 970, 550);

            //separation line
            stroke(32, 79, 1);
            strokeWeight(.1);
            line(305, 411, 327.5, 328.5);
        }

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);