
let steps1;

function setup ()
{   
    bg = loadImage('../Assets/piazza2.jpg');
    createCanvas(1200, 600);
    img_agent1 = loadImage('../Assets/police1.png');
    img_agent2 = loadImage('../Assets/police2.png');
    img_agent3 = loadImage('../Assets/police3.png');
    img_agent4 = loadImage('../Assets/police4.png');
    img_intro1 = loadImage('../Assets/intro_screen1.jpg');
    img_intro2 = loadImage('../Assets/intro_screen2.jpg');
    img_2lives = loadImage('../Assets/caught_police_1.jpg');
    img_1lives = loadImage('../Assets/caught_police_2.jpg');
    img_0lives = loadImage('../Assets/caught_police_3.jpg');

    img_points = loadImage('../Assets/points_sign.png');
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
        tourist4();
        image(img_obelisk, 567, 80);
        image(img_points, 300, 550);
        textSize(32);
        textFont('Georgia');
        text("TRIES: "+gameLives+"       MILKED: "+milked, 430, 592);
         
   // drawGrid();
            } 
     // screens
    else if (gameStatus=="start1") {
        background(img_intro1);  
        } 
    else if (gameStatus=="start2") {
        background(img_intro2);  
        } 
    else if (gameStatus=="wait1") {
        image(img_2lives, 250, 150)
        }
    else if (gameStatus=="wait2") {
        image(img_1lives, 250, 150)
          }
    else if (gameStatus=="lost") {
        image(img_0lives, 250, 150)
              }
}


function player ()
{    
 image(img_player[dir_player+dir_anim], playerX-40, playerY+40);
 if (((Math.abs(playerX-statusAgent1.x))<40) && ((Math.abs(playerY+40-statusAgent1.y))<50)){livesMinus()}
 if (((Math.abs(playerX-statusAgent2.x))<40) && ((Math.abs(playerY+40-statusAgent2.y))<50)){livesMinus()}
 if (((Math.abs(playerX-statusAgent3.x))<40) && ((Math.abs(playerY+40-statusAgent3.y))<50)){livesMinus()}
}


function mouseClicked()
{
    console.log( ((Math.abs(playerX-statusAgent1.x))), ((Math.abs(playerY+40-statusAgent1.y)) ) );
        if (gameStatus=="start1") {gameStatus="start2"}
        else if (gameStatus=="start2") {gameStatus="play"}
        else if (gameStatus=="wait1") {
            statusAgent1.x=100;
            statusAgent1.y=150;
            statusAgent2.x=850;
            statusAgent2.y=250;
            statusAgent3.x=600;
            statusAgent3.y=400;
            gameStatus="play"
            playerX = 600;
            playerY = 80;
        }
        else if (gameStatus=="wait2") {
            statusAgent1.x=100;
            statusAgent1.y=150;
            statusAgent2.x=850;
            statusAgent2.y=250;
            statusAgent3.x=600;
            statusAgent3.y=400;
            playerX = 600;
            playerY = 80;
            gameStatus="play";
        }
        else if (gameStatus=="lost") {
            statusAgent1.x=100;
            statusAgent1.y=150;
            statusAgent2.x=850;
            statusAgent2.y=250;
            statusAgent3.x=600;
            statusAgent3.y=400;
            playerX = 600;
            playerY = 80;
            gameLives=3;
            gameStatus="play";
            
        }
}

function livesMinus()
{
    gameLives=gameLives-1;
   
    if (gameLives===0) {
        gameStatus="lost";
    }
    else if (gameLives===2) {
        gameStatus="wait1";
    }
    else if (gameLives===1) {
        gameStatus="wait2";
    }
};

function milkedPlus(act)
{
    milked=milked+1;
    act.active=0;
    addTourist();
}

function addTourist()
{
    if (milked===1) {
        statusTourist4.active=1;
    }
}