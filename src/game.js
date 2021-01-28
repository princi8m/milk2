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
          //  console.log( );
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

      function cashSound() {
        if (audio_cash.isPlaying()) {
           audio_cash.stop();
        } else {
          audio_cash.play();
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
      if (((Math.abs(playerX-30-statusTourist1.x))<40) && ((Math.abs(playerY+20-statusTourist1.y))<50)){milkedPlus(1)}
      }
}

function tourist2()
{
  if (statusTourist2.active===1)
      {
      image(img_tourist2, statusTourist2.x, statusTourist2.y);
      if (((Math.abs(playerX-30-statusTourist2.x))<40) && ((Math.abs(playerY+20-statusTourist2.y))<50)){milkedPlus(2)}
      }
}

function tourist3()
{
  if (statusTourist3.active===1)
      {
      image(img_tourist3, statusTourist3.x, statusTourist3.y);
      if (((Math.abs(playerX-30-statusTourist3.x))<40) && ((Math.abs(playerY+20-statusTourist3.y))<50)){milkedPlus(3)}
      }
}

function tourist4()
{
 // console.log("a4");
  if (statusTourist4.active===1)
      {
      image(img_tourist4, statusTourist4.x, statusTourist4.y);
      if (((Math.abs(playerX-30-statusTourist4.x))<40) && ((Math.abs(playerY+40-statusTourist4.y))<50)){milkedPlus(4)}
      }
}

function tourist5()
{
 // console.log("a5");
  if (statusTourist5.active===1)
      {
      image(img_tourist5, statusTourist5.x, statusTourist5.y);
      if (((Math.abs(playerX-30-statusTourist5.x))<40) && ((Math.abs(playerY+40-statusTourist5.y))<50)){milkedPlus(5)}
      }
}

function tourist6()
{
 // console.log("a6");
  if (statusTourist6.active===1)
      {
      image(img_tourist6, statusTourist6.x, statusTourist6.y);
      if (((Math.abs(playerX-30-statusTourist6.x))<40) && ((Math.abs(playerY+40-statusTourist6.y))<50)){milkedPlus(6)}
      }
}


function tourist7()
{
 // console.log("a7");
  if (statusTourist7.active===1)
      {
      image(img_tourist7, statusTourist7.x, statusTourist7.y);
      if (((Math.abs(playerX-30-statusTourist7.x))<40) && ((Math.abs(playerY+40-statusTourist7.y))<50)){milkedPlus(7)}
      }
}

function tourist8()
{

  if (statusTourist8.active===1)
      {
      image(img_tourist8, statusTourist8.x, statusTourist8.y);
      if (((Math.abs(playerX-30-statusTourist8.x))<40) && ((Math.abs(playerY+40-statusTourist8.y))<50)){milkedPlus(8)}
      }
}


function tourist9()
{
 // console.log("a7");
  if (statusTourist9.active===1)
      {
      image(img_tourist9, statusTourist9.x, statusTourist9.y);
      if (((Math.abs(playerX-30-statusTourist9.x))<40) && ((Math.abs(playerY+40-statusTourist9.y))<50)){milkedPlus(9)}
      }
}


function tourist10()
{
 // console.log("a7");
  if (statusTourist10.active===1)
      {
      image(img_tourist10, statusTourist10.x, statusTourist10.y);
      if (((Math.abs(playerX-30-statusTourist10.x))<40) && ((Math.abs(playerY+40-statusTourist10.y))<50)){milkedPlus(10)}
      }
}


function tourist11()
{
 // console.log("a7");
  if (statusTourist11.active===1)
      {
      image(img_tourist11, statusTourist11.x, statusTourist11.y);
      if (((Math.abs(playerX-30-statusTourist11.x))<40) && ((Math.abs(playerY+40-statusTourist11.y))<50)){milkedPlus(11)}
      }
}


function tourist12()
{
 // console.log("a7");
  if (statusTourist12.active===1)
      {
      image(img_tourist12, statusTourist12.x, statusTourist12.y);
      if (((Math.abs(playerX-30-statusTourist12.x))<40) && ((Math.abs(playerY+40-statusTourist12.y))<50)){milkedPlus(12)}
      }
}


function tourist13()
{
 // console.log("a7");
  if (statusTourist13.active===1)
      {
      image(img_tourist13, statusTourist13.x, statusTourist13.y);
      if (((Math.abs(playerX-30-statusTourist13.x))<40) && ((Math.abs(playerY+40-statusTourist13.y))<50)){milkedPlus(13)}
      }
}


function tourist14()
{
 // console.log("a7");
  if (statusTourist14.active===1)
      {
      image(img_tourist14, statusTourist14.x, statusTourist14.y);
      if (((Math.abs(playerX-30-statusTourist14.x))<40) && ((Math.abs(playerY+40-statusTourist14.y))<50)){milkedPlus(14)}
      }
}


function tourist15()
{
 // console.log("a7");
  if (statusTourist15.active===1)
      {
      image(img_tourist15, statusTourist15.x, statusTourist15.y);
      if (((Math.abs(playerX-30-statusTourist15.x))<40) && ((Math.abs(playerY+40-statusTourist15.y))<50)){milkedPlus(15)}
      }
}


function tourist16()
{
 // console.log("a7");
  if (statusTourist16.active===1)
      {
      image(img_tourist16, statusTourist16.x, statusTourist16.y);
      if (((Math.abs(playerX-30-statusTourist16.x))<40) && ((Math.abs(playerY+40-statusTourist16.y))<50)){milkedPlus(16)}
      }
}


