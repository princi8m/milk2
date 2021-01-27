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