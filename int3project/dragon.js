/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1100, 550);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var x = 0; // X position for the ant
        var dragonflies = [];//contains dragonfly x, y, and object

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
            
            //draws dragonfly and keeps it where it is drawn
            for (var i = 0; i < dragonflies.length; i++) {
                dragonfly(dragonflies[i].x, dragonflies[i].y, dragonflies[i].angle);
            }
        };
        
function dragonfly(x, y, angle) {

            pushMatrix(); //backsup current display matrix
            translate(x, y); //sets (0,0) to mouse
            rotate(angle); //assigns random angle to rotate at

            //dragonfly
              
            //main body
            fill(137, 65, 145); 
            stroke(137, 65, 145);
            ellipse(0, 0, 150, 15);//body
            ellipse(0-70, 0, 30, 30);//head
            ellipse(0-40, 0, 40, 30);//mid-body
            
            //antennae
            noFill();
            stroke(0, 0, 0);
            strokeWeight(1);
            bezier(0-82, 0-10, 0-189, 0-49, 0-97, 0-67, 0-121, 0-39);//left 
            bezier(0-82, 0+10, 0-189, 0+49, 0-97, 0+67, 0-121, 0+39);//right
            
            //color for wings
            stroke(128, 142, 160);
            fill(206, 227, 255, 75);
            
            //top right wing
            pushMatrix();
            translate(0-23, 0-62);
            rotate(0.3);
            ellipse(0, 0, 30, 130);
            popMatrix();
            
            //top left wing
            pushMatrix();
            translate(0-63, 0-62);
            rotate(-0.3);
            ellipse(0, 0, 30, 130);
            popMatrix();
            
            //bottom right wing
            pushMatrix();
            translate(0-26, 0+62);
            rotate(2.9);
            ellipse(0, 0, 30, 130);
            popMatrix();
            
            //bottom left wing
            pushMatrix();
            translate(0-60, 0+62);
            rotate(-2.9);
            ellipse(0, 0, 30, 130);
            popMatrix(); 
            
            popMatrix();
        }
        
//to make dragonfly appear when mouse is clicked        
mouseClicked = function() {
    dragonflies.push({ x: mouseX, y: mouseY, angle: random(6.28) });
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