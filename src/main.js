
let steps1;


function setup ()
{   
    bg = loadImage('/Assets/piazza2.jpg');
    createCanvas(1200  , 600);
    img_obelisk = loadImage('/Assets/obelisk.png');
    img_player = loadImage('/Assets/roman1-down.png');
    img_player[1] = loadImage('/Assets/roman1-up.png');
    img_player[3] = loadImage('/Assets/roman1-right.png');
    img_player[7] = loadImage('/Assets/roman1-down.png');
    img_player[5] = loadImage('/Assets/roman1-left.png');
    img_player[2] = loadImage('/Assets/roman1-up2.png');
    img_player[4] = loadImage('/Assets/roman1-right2.png');
    img_player[8] = loadImage('/Assets/roman1-down2.png');
    img_player[6] = loadImage('/Assets/roman1-left2.png');
    
    
    steps1 = loadSound('/Assets/steps2.mp3');
   
}

function draw () {
    background(bg);
    keys1();
    player();  
    image(img_obelisk, 567, 80);
    //drawGrid();
}



function player ()
{    
 image(img_player[dir_player+dir_anim], playerX-40, playerY+40);

}



