//this is the users input
var thingToDraw = "";
/* global ladybugButton dragonflyButton butterflyYellow butterflyPink flowerWhite flowerPink flowerDark flowerViolet*/
// ladybugButton and dragonflyButton were already defined on dropdown.js

//listens for when the ladybug is clicked
ladybugButton.addEventListener("click", function() {
    thingToDraw = "ladybug";
});

//listens for when the dragonfly is clicked
dragonflyButton.addEventListener("click", function() {
    thingToDraw = "dragonfly";
});

//listens for when the yellow butterfly is clicked
butterflyYellow.addEventListener("click", function() {
    thingToDraw = "yellowButterfly";
});

//listens for when the pink butterfly is clicked
butterflyPink.addEventListener("click", function() {
    thingToDraw = "butterflyPink";
});

//listens for when the white flower is clicked
flowerWhite.addEventListener("click", function() {
   thingToDraw = "flowerWhite";  
});

//listens for when the pink flower is clicked
flowerPink.addEventListener("click", function() {
   thingToDraw = "flowerPink"; 
});

//listens for when the dark pink flower is picked
flowerDark.addEventListener("click", function() {
   thingToDraw = "flowerDark"; 
});

//listens for when the violet flower is picked
flowerViolet.addEventListener("click", function() {
   thingToDraw = "flowerViolet"; 
});

/* global draw ellipse rect p processing width height size background noStroke fill stroke strokeWidth
   strokeWeight line pushMatrix translate rotate triangle noFill bezier popMatrix mouseClicked
   mouseX mouseY Processing random */
var sketch = function(processing) {
    with(processing) {
        size(1100, 550);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var x = 0; // X position for the ant
        var ladybugs = []; // contains ladybug x, y, ang object
        var dragonflies = []; //contains dragonfly x, y, ang object
        var yellowButterflies = []; //contains yellow butterfly x, y, ang object
        var butterfliesPink = []; //contains butterflyPink x, y, ang object
        var whiteFlowers = []; //contains white flowers x, y, ang object
        var pinkFlowers = []; //contains pink flowers x, y, ang object
        var darkFlowers = []; //contains dark pink flower x, y, ang object
        var violetFlowers = []; //contains violet flower x, y, ang object

        function ladybug(x, y, angle) {

            pushMatrix(); //sets (0, 0) to mouse
            translate(x, y);
            rotate(angle); //assigns random angle to rotate at

            //ladybug
            noStroke();
            fill(0, 0, 0);
            ellipse(0, 0 - 30, 50, 50); //head
            fill(255, 0, 0);
            ellipse(0, 0, 80, 80); //body
            fill(0, 0, 0);
            ellipse(0 - 12, 0 - 26, 15, 15); //top left dot
            ellipse(0 - 28, 0, 15, 15); //mid left dot
            ellipse(0 - 15, 0 + 23, 15, 15); //bottom left dot
            ellipse(0 + 12, 0 - 26, 15, 15); //top right dot
            ellipse(0 + 28, 0, 15, 15); //mid right dot
            ellipse(0 + 15, 0 + 23, 15, 15); //bottom right dot
            ellipse(0 + 1, 0 - 4, 15, 15); //middle dot right
            ellipse(0 - 1, 0 - 4, 15, 15); //middle dot left
            triangle(0 + 5, 0 + 39, 0 - 5, 0 + 40, 0, 0 - 40); //inside

            //ladybug's antennas
            noFill();
            stroke(0, 0, 0);
            strokeWeight(1);
            bezier(0 - 13, 0 - 51, 0 - 40, 0 - 119, 0 - 47, 0 - 51, 0 - 35, 0 - 62); //left 
            bezier(0 + 13, 0 - 51, 0 + 40, 0 - 119, 0 + 47, 0 - 51, 0 + 35, 0 - 62); //right

            popMatrix(); //resets everything back to top left corner being (0, 0)
        }


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
        
        function butterflyYellow(x, y, angle) {

            pushMatrix(); //backsup current display matrix
            translate(x, y); //sets (0,0) to mouse
            rotate(angle); //assigns random angle to rotate at
    
            //butterfly orange yellow
            fill(255, 212, 25);
            stroke(255, 166, 24);
            strokeWeight(3);
            
            //top right wing
            pushMatrix();
            translate(0+30, 0-25); 
            rotate(0.8);
            ellipse(0, 0, 30, 55);
            popMatrix();
            
            //top left wing
            pushMatrix();
            translate(0-13, 0-30);
            rotate(-0.3);
            //wings
            ellipse(0, 0, 40, 70);
            popMatrix();
            
            //bottom right wing
            pushMatrix();
            translate(0+30, 0+25);
            rotate(-0.8);  
            //wings
            ellipse(0, 0, 30, 55);
            popMatrix();
            
            //bottom left wing
            pushMatrix();
            translate(0-13, 0+30);
            rotate(-2.8);
            //wings
            ellipse(0, 0, 40, 70);
            popMatrix(); 
            
            fill(0,0,0);
            stroke(0,0,0);
            ellipse(0, 0, 80, 10);//head
            ellipse(0-30, 0, 20, 20);//body
            
            //antennae
            noFill();
            stroke(0, 0, 0);
            strokeWeight(1); 
            bezier(0-35, 0, 0-108, 0-42, 0-31, 0-51, 0-48, 0-22);//left 
            bezier(0-35, 0, 0-108, 0+42, 0-31, 0+51, 0-48, 0+22);//right 
                
            popMatrix();
        }
        function butterflyPink(x, y, angle) {

            pushMatrix(); //backsup current display matrix
            translate(x, y); //sets (0,0) to mouse
            rotate(angle); //assigns random angle to rotate at
    
            //butterflyPink
            fill(206, 105, 146);
            stroke(112, 0, 46);
            strokeWeight(3);
             
            //top right wing
            pushMatrix();
            translate(0+30, 0-25);  
            rotate(0.8);
            ellipse(0, 0, 30, 55);
            popMatrix(); 
            
            //top left wing
            pushMatrix();
            translate(0-13, 0-30);
            rotate(-0.3);
            //wings
            ellipse(0, 0, 40, 70);
            popMatrix();
            
            //bottom right wing
            pushMatrix();
            translate(0+30, 0+25);
            rotate(-0.8);  
            //wings
            ellipse(0, 0, 30, 55);
            popMatrix();
            
            //bottom left wing
            pushMatrix();
            translate(0-13, 0+30);
            rotate(-2.8);
            //wings
            ellipse(0, 0, 40, 70);
            popMatrix(); 
            
            fill(0,0,0);
            stroke(0,0,0);
            ellipse(0, 0, 80, 10);//head
            ellipse(0-30, 0, 20, 20);//body
            
            //antennae
            noFill();
            stroke(0, 0, 0);
            strokeWeight(1); 
            bezier(0-35, 0, 0-108, 0-42, 0-31, 0-51, 0-48, 0-22);//left 
            bezier(0-35, 0, 0-108, 0+42, 0-31, 0+51, 0-48, 0+22);//right 
                
            popMatrix();
        }

        function darkFlower(x, y, angle) {  
            pushMatrix(); //backsup current display matrix
            translate(x, y); //sets (0,0) to mouse
            rotate(angle); //assigns random angle to rotate at
            
            //white flower
            //center
            noStroke();
            fill();
            fill(130, 0, 54);
            ellipse(0, 0, 30, 30); //background
    
            //petals
            fill(130, 0, 54);
            ellipse(0, 0 - 20, 22, 22); //top
            ellipse(0, 0 + 20, 22, 22); //bottom
            ellipse(0 + 19, 0 - 10, 22, 22); //top right
            ellipse(0 + 19, 0 + 10, 22, 22); //bottom right
            ellipse(0 - 19, 0 - 10, 22, 22); //top left
            ellipse(0 - 19, 0 + 10, 22, 22); //bottom right
    
            //center
            fill(252, 255, 109);
            ellipse(0, 0, 20, 20);
            popMatrix();
        }
        
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
        function violetFlower(x, y, angle) {
            pushMatrix(); //backsup current display matrix
            translate(x, y); //sets (0,0) to mouse
              rotate(angle); //assigns random angle to rotate at
        
            //white flower
            //center
            noStroke();
            fill();
            fill(55, 49, 84);
            ellipse(0, 0, 30, 30); //background
            
            //petals
            fill(55, 49, 84);
            ellipse(0, 0 - 20, 22, 22); //top
            ellipse(0, 0 + 20, 22, 22); //bottom
            ellipse(0 + 19, 0 - 10, 22, 22); //top right
            ellipse(0 + 19, 0 + 10, 22, 22); //bottom right
            ellipse(0 - 19, 0 - 10, 22, 22); //top left
            ellipse(0 - 19, 0 + 10, 22, 22); //bottom right
            
            //center
            fill(252, 255, 109);
            ellipse(0, 0, 20, 20);
            
            popMatrix();
        }
        function whiteFlower(x, y, angle) {
            pushMatrix(); //backsup current display matrix
            translate(x, y); //sets (0,0) to mouse
            rotate(angle); //assigns random angle to rotate at
    
            //white flower
            //center
            noStroke();
            fill();
            ellipse(0, 0, 30, 30);//background
            
            //petals
            fill(255, 255, 255);
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

            //draws ladybug and keeps it where it is drawn
            for (var i = 0; i < ladybugs.length; i++) {
                ladybug(ladybugs[i].x, ladybugs[i].y, ladybugs[i].angle);
            }
            
            // //draws dragonfly and keeps it where it is drawn
            for (var i = 0; i < dragonflies.length; i++) {
                dragonfly(dragonflies[i].x, dragonflies[i].y, dragonflies[i].angle);
            }
            
            //draws butterflyYellow and keeps it where it is drawn
            for (var i = 0; i < yellowButterflies.length; i++) {
                butterflyYellow(yellowButterflies[i].x, yellowButterflies[i].y, yellowButterflies[i].angle);
            }
            
            //draws butterflyPink and keeps it where it is drawn
            for (var i = 0; i < butterfliesPink.length; i++) {
                butterflyPink(butterfliesPink[i].x, butterfliesPink[i].y, butterfliesPink[i].angle);
            }
            //draws whiteFlower and keeps it where it is drawn
            for (var i = 0; i < whiteFlowers.length; i++) {
                whiteFlower(whiteFlowers[i].x, whiteFlowers[i].y, whiteFlowers[i].angle);
            }
            //draws violetFlower and keeps it where it is drawn
                for (var i = 0; i < violetFlowers.length; i++) {
            violetFlower(violetFlowers[i].x, violetFlowers[i].y, violetFlowers[i].angle);
            }
            
            //draws pinkFlower and keeps it where it is drawn
            for (var i = 0; i < pinkFlowers.length; i++) {
                pinkFlower(pinkFlowers[i].x, pinkFlowers[i].y, pinkFlowers[i].angle);
            }
            for (var i = 0; i < darkFlowers.length; i++) {
                darkFlower(darkFlowers[i].x, darkFlowers[i].y, darkFlowers[i].angle);
            }
        };

        mouseClicked = function() {
            //alerts the user to pick something if they leave the dropdown blank
            if(thingToDraw == "") {
                alert("don't forget to pick something in the dropdown menu!!");
            }
            // to make ladybug appear when mouse is clicked
            if (thingToDraw == "ladybug") {
                ladybugs.push({
                    x: mouseX,
                    y: mouseY,
                    angle: random(6.28)
                });
            }
            // to make dragonfly appear when mouse is clicked   
            else if (thingToDraw == "dragonfly") {
                dragonflies.push({
                    x: mouseX,
                    y: mouseY,
                    angle: random(6.28)
                });
            }
            //to make yellow butterfly appear when mouse is clicked
            else if (thingToDraw == "yellowButterfly") {
                yellowButterflies.push({
                    x: mouseX,
                    y: mouseY,
                    angle: random(6.28) 
                });
            }
            //to make the pink butterfly appear when mouse is clicked
            else if (thingToDraw == "butterflyPink") {
                butterfliesPink.push({ 
                    x: mouseX, 
                    y: mouseY, 
                    angle: random(6.28) 
                });
            }
            else if (thingToDraw == "flowerWhite") {
                whiteFlowers.push({ 
                    x: mouseX, 
                    y: mouseY, 
                    angle: random(6.28) 
                });
            }
            else if (thingToDraw == "flowerPink") {
                pinkFlowers.push({ 
                    x: mouseX, 
                    y: mouseY, 
                    angle: random(6.28) 
                });
            }
            else if (thingToDraw == "flowerDark") {
                darkFlowers.push({ 
                    x: mouseX, 
                    y: mouseY, 
                    angle: random(6.28) 
                });
            }
            // to make violetFlower appear when mouse is clicked 
            else if (thingToDraw == "flowerViolet") {
                violetFlowers.push({ 
                    x: mouseX, 
                    y: mouseY, 
                    angle: random(6.28) 
                });
            }
        };
        
    }
};
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
var p = new Processing(document.getElementById("output-canvas"), sketch);