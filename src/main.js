
let steps1;

function setup ()
{   
    bg = loadImage('Assets/piazza2.jpg');
    bgWin = loadImage('../Assets/victory_scrren.jpg');
    createCanvas(1200, 600);
    img_agent1 = loadImage('Assets/police1.png');
    img_agent2 = loadImage('Assets/police2.png');
    img_agent3 = loadImage('Assets/police3.png');
    img_agent4 = loadImage('Assets/police4.png');
    img_title =  loadImage('Assets/img_title.jpg');
    img_intro1 = loadImage('Assets/intro_screen1.jpg');
    img_intro2 = loadImage('Assets/intro_screen2.jpg');
    img_2lives = loadImage('Assets/caught_police_1.jpg');
    img_1lives = loadImage('Assets/caught_police_2.jpg');
    img_0lives = loadImage('Assets/caught_police_3.jpg');

    img_points = loadImage('Assets/points_sign.png');
    img_obelisk =loadImage('Assets/obelisk.png');
    img_player = loadImage('Assets/roman1-down.png');
    img_player[1] = loadImage('Assets/roman1-up.png');
    img_player[3] = loadImage('Assets/roman1-right.png');
    img_player[7] = loadImage('Assets/roman1-down.png');
    img_player[5] = loadImage('Assets/roman1-left.png');
    img_player[2] = loadImage('Assets/roman1-up2.png');
    img_player[4] = loadImage('Assets/roman1-right2.png');
    img_player[8] = loadImage('Assets/roman1-down2.png');
    img_player[6] = loadImage('Assets/roman1-left2.png');

    img_tourist1 = loadImage('Assets/tourist1.png');
    img_tourist2 = loadImage('Assets/tourist2.png');
    img_tourist3 = loadImage('Assets/tourist3.png');
    img_tourist4 = loadImage('Assets/tourist4.png');
    img_tourist5 = loadImage('Assets/tourist5.png');
    img_tourist6 = loadImage('Assets/tourist6.png');
    img_tourist7 = loadImage('Assets/tourist7.png');
    img_tourist8 = loadImage('Assets/tourist8.png');
    img_tourist9 = loadImage('Assets/tourist9.png');
    img_tourist10 =loadImage('Assets/tourist10.png');
    img_tourist11 =loadImage('Assets/tourist11.png');
    img_tourist12= loadImage('Assets/tourist12.png');
    img_tourist13= loadImage('Assets/tourist13.png');
    img_tourist14= loadImage('Assets/tourist14.png');
    img_tourist15 =loadImage('Assets/tourist15.png');
    img_tourist16= loadImage('Assets/tourist16.png');
  

    steps1 = loadSound('Assets/steps2.mp3');
    audio_cash = loadSound('Assets/audio_cash2.mp3');
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
        tourist5();
        tourist6();
        tourist7();
        tourist10();
        tourist11();
        tourist12();
        tourist13();
        tourist14();
        
    

        image(img_obelisk, 567, 80);
        image(img_points, 300, 550);
        textSize(32);
        textFont('Georgia');
        text("TRIES: "+gameLives+"       MILKED: "+milked, 430, 592);
         
   // drawGrid();
            } 
     // screens

     else if (gameStatus=="title") {
        background(img_title);  
        } 
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
    else if (gameStatus=="win") {
        background(bgWin);
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
  //  console.log( ((Math.abs(playerX-statusAgent1.x))), ((Math.abs(playerY+40-statusAgent1.y)) ) );
        if (gameStatus=="start1") {gameStatus="start2"}
        else if (gameStatus=="title") {gameStatus="start1"}
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

function milkedPlus(actT)
{
    milked=milked+1;
    cashSound();
    console.log("actT",actT);
 
    switch (actT) {  

        case 1:
          statusTourist1.active=0;
          break;

        case 2:
          statusTourist2.active=0;
          break;

        case 3:
          statusTourist3.active=0;   
           break;

        case 4:
          statusTourist4.active=0;
            break;

        case 5:
          statusTourist5.active=0;
            break;

        case 6:
          statusTourist6.active=0;
            break;

        case 7:
          statusTourist7.active=0;
            break;

        case 8:
            statusTourist8.active=0; 
            break; 

        case 9:
            statusTourist9.active=0;
            break;

        case 10:
            statusTourist10.active=0;
            break;

        case 11:
          statusTourist11.active=0;
          break;

        case 12:
          statusTourist12.active=0;
          break;

        case 13:
          statusTourist13.active=0;   
           break;

        case 14:
          statusTourist14.active=0;
            gameStatus="win";
            break;

        case 15:
            if (milked>11) {gameStatus="win"}
         // statusTourist15.active=0;
          break;
      }

      addTourist();
}

function addTourist()
{
    console.log(milked)
    switch (milked) {
          case 1:
          statusTourist4.active=1;
          break;

          case 2:
          statusTourist5.active=1;
          break;

          case 3:
          statusTourist6.active=1;
          break;

          case 4:
          statusTourist7.active=1;
          break;

          case 5:
          statusTourist8.active=1;
          break;
  
          case 6:
          statusTourist9.active=1;
          break;
  
          case 7:
          statusTourist10.active=1;
          break;
  
          case 8:
          statusTourist11.active=1;
          break;

          case 9:
          statusTourist12.active=1;
          break;
  
          case 10:
          statusTourist13.active=1;
          break;
  
          case 11:
          statusTourist14.active=1;
          break;
  
          case 12:
          statusTourist15.active=1;
          break;
  
          case 13:
          statusTourist16.active=1;
          break;
    

      }
}