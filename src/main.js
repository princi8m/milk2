
let steps1;

function setup ()
{   
    bg = loadImage('../Assets/piazza2.jpg');
    createCanvas(1200  , 600);
    img_agent1 = loadImage('../Assets/police1.png');
    img_agent2 = loadImage('../Assets/police2.png');
    img_agent3 = loadImage('../Assets/police3.png');
    img_agent4 = loadImage('../Assets/police4.png');
    img_intro1 = loadImage('../Assets/intro1a.jpg');
    img_intro2 = loadImage('../Assets/intro1b.jpg');
    img_intro3 = loadImage('../Assets/intro1c.jpg');
    img_obelisk =loadImage('../Assets/obelisk.png');
    img_player = loadImage('../Assets/roman1-down.png');
    img_player[1] = loadImage('../Assets/roman1-up.png');
    img_player[3] = loadImage('../Assets/roman1-right.png');
    img_player[7] = loadImage('../Assets/roman1-down.png');
    img_player[5] = loadImage('../Assets/roman1-left.png');
    img_player[2] = loadImage('../Assets/roman1-up2.png');
    img_player[4] = loadImage('../Assets/roman1-right2.png');
    img_player[8] = loadImage('../Assets/roman1-down2.png');
    img_player[6] = loadImage('../Assets/roman1-left2.png');
    img_tourist1 = loadImage('../Assets/tourist1.png');
    img_tourist2 = loadImage('../Assets/tourist2.png');
    img_tourist3 = loadImage('../Assets/tourist3.png');
    img_tourist4 = loadImage('../Assets/tourist4.png');
    img_tourist5 = loadImage('../Assets/tourist5.png');
    img_tourist6 = loadImage('../Assets/tourist6.png');
    img_tourist7 = loadImage('../Assets/tourist7.png');

    steps1 = loadSound('/Assets/steps2.mp3');
}

function draw () {
    if (gameStatus=="play")  {
        background(bg);
        keys1();
        player();  
        agent1();
        agent2();
        agent3();
        tourist1();
        tourist2();
        tourist3();
        image(img_obelisk, 567, 80);
        
       
   // drawGrid();
            } 
    else if (gameStatus=="start1") {
        background(img_intro1);  
        } 
    else if (gameStatus=="start2") {
        background(img_intro2);  
        } 
    else if (gameStatus=="start3") {
        background(img_intro3);  
         }   
}


function player ()
{    
 image(img_player[dir_player+dir_anim], playerX-40, playerY+40);
 //if (((Math.abs(playerX-statusAgent1.x))<25) && ((Math.abs(playerY+40-statusAgent1.y))<25)){gameStatus="start1"}
}


function mouseClicked()
{
    console.log( ((Math.abs(playerX-statusAgent1.x))), ((Math.abs(playerY+40-statusAgent1.y)) ) );
        if (gameStatus=="start1") {gameStatus="start2"}
        else if (gameStatus=="start2") {gameStatus="start3"}
        else if (gameStatus=="start3") {gameStatus="play"}
      
}