function keys1(){
    playerX2=playerX;
    playerY2=playerY;

    if (keyCode === LEFT_ARROW) {
        dir_player=5;
        dirX=-playerSpeed;
        dirY=0;
        playerX2=playerX+dirX;
        if (checkSquare()===0) {
            playerX=playerX2;
            console.log( );
            dir_anim=(Math.floor(playerX/40%2));
            stepsSound();
            }
      } 
      else if (keyCode === RIGHT_ARROW) {
        dir_player=3;
        dirX=playerSpeed;
        dirY=0;
        playerX2=playerX+dirX;
        if (checkSquare()===0) {playerX=playerX2;
            dir_anim=((Math.floor(playerX/40%2)));
            stepsSound();
            }
      
      }
      else if (keyCode === UP_ARROW) {
        dir_player=1;
        dirX=0;
        dirY=-playerSpeed;
        playerY2=playerY+dirY;
        if (checkSquare()===0) {playerY=playerY2;
            dir_anim=((Math.floor(playerY/40%2)));
            stepsSound();
            
            }
      }
      else if (keyCode === DOWN_ARROW) {
        dir_player=7;
        dirX=0;
        dirY=playerSpeed;
        playerY2=playerY+dirY;
        if (checkSquare()===0) {playerY=playerY2;
            dir_anim=((Math.floor(playerY/40%2)));
            stepsSound();
          }
      }

      else if (keyCode === ENTER) {
       //console.log(playerX, playerY);
        steps1.stop();
       // bkSound() ;
      }

      
}

function checkSquare(){
    // if ( cGrid[floor(playerX/50)][floor(playerY/50)] === 1 ) {
    //         return 0;
    //     } else {return 1;}
    //console.log((cGrid[floor(playerX/50)-1][floor(playerY/50)-1]));
    return cGrid[Math.round(playerX2/50)][Math.round(playerY2/50)+1];
    }


    function stepsSound() {
        if (steps1.isPlaying()) {
          //steps1.stop();
        } else {
          steps1.play();
        }
      }

    //   function bkSound() {
    //     if (bkmusic1.isPlaying()) {
    //     } else {
    //       bkmusic1.play();
    //     }
    //   }

    function drawGrid (){
        for (let i = 0; i < 24; i ++ )
        {
          textSize(32);
          text(i, (50*i), 30);
          text(i,  0, 30+(50*i));
          line((50*i), 0, (50*i), 1200);
          line(0, 50*i, 1200, 50*i);

          for (let z = 0; z<12; z++){
           text(cGrid[i][z],(i*50), 50+(z*50));
          checkSquare();   
          }
        }
}


function agent1()
{
  statusAgent1.x=statusAgent1.x+statusAgent1.directionX;
  if (statusAgent1.x>470) {
    statusAgent1.x = statusAgent1.x - statusAgent1.directionX;
    statusAgent1.directionX = statusAgent1.directionX * -1;
    }

  if (statusAgent1.x<100) {
    statusAgent1.x=statusAgent1.x - statusAgent1.directionX;
    statusAgent1.directionX = statusAgent1.directionX * -1;
    }

  statusAgent1.y=statusAgent1.y+statusAgent1.directionY;
  if (statusAgent1.y>280) {
        statusAgent1.y = statusAgent1.y - statusAgent1.directionY;
        statusAgent1.directionY = statusAgent1.directionY * -1 ;
      }
  if (statusAgent1.y<100) {
        statusAgent1.y = statusAgent1.y - statusAgent1.directionY;
        statusAgent1.directionY = statusAgent1.directionY * -1 ;
      }
  image(img_agent1, statusAgent1.x, statusAgent1.y);
}

function agent2()
{
  statusAgent2.x=statusAgent2.x+statusAgent2.directionX;
  if (statusAgent2.x>1000) {
    statusAgent2.x = statusAgent2.x - statusAgent2.directionX;
    statusAgent2.directionX = statusAgent2.directionX * -1;
    }

  if (statusAgent2.x<700) {
    statusAgent2.x=statusAgent2.x - statusAgent2.directionX;
    statusAgent2.directionX = statusAgent2.directionX * -1;
    }

  statusAgent2.y=statusAgent2.y+statusAgent2.directionY;
  if (statusAgent2.y>300) {
        statusAgent2.y = statusAgent2.y - statusAgent2.directionY;
        statusAgent2.directionY = statusAgent2.directionY * -1 ;
      }
  if (statusAgent2.y<50) {
        statusAgent2.y = statusAgent2.y - statusAgent2.directionY;
        statusAgent2.directionY = statusAgent2.directionY * -1 ;
      }
  image(img_agent2, statusAgent2.x, statusAgent2.y);
}

function agent3()
{
  statusAgent3.x=statusAgent3.x+statusAgent3.directionX;
  if (statusAgent3.x>1000) {
    statusAgent3.x = statusAgent3.x - statusAgent3.directionX;
    statusAgent3.directionX = statusAgent3.directionX * -1;
    }

  if (statusAgent3.x<100) {
    statusAgent3.x=statusAgent3.x - statusAgent3.directionX;
    statusAgent3.directionX = statusAgent3.directionX * -1;
    }

  statusAgent3.y=statusAgent3.y+statusAgent3.directionY;

  if (statusAgent3.y>400) {
        statusAgent3.y = statusAgent3.y - statusAgent3.directionY;
        statusAgent3.directionY = statusAgent3.directionY * -1 ;
      }
  if (statusAgent3.y<300) {
       statusAgent3.y = statusAgent3.y - statusAgent3.directionY;
      statusAgent3.directionY = statusAgent3.directionY * -1 ;
    }
  image(img_agent3, statusAgent3.x, statusAgent3.y);
}

function tourist1()
{
  if (statusTourist1.active===1)
      {
      image(img_tourist1, statusTourist1.x, statusTourist1.y);
      if (((Math.abs(playerX-30-statusTourist1.x))<40) && ((Math.abs(playerY+40-statusTourist1.y))<50)){milkedPlus(1)}
      }
}

function tourist2()
{
  if (statusTourist2.active===1)
      {
      image(img_tourist2, statusTourist2.x, statusTourist2.y);
      }
}

function tourist3()
{
  if (statusTourist3.active===1)
      {
      image(img_tourist3, statusTourist3.x, statusTourist3.y);
      }
}

