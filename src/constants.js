// initial position of player
var playerX = 800;
var playerY = 300;
var dirX=0;
var dirY=0;
var dir_player=2;
var playerSpeed=5;
var dir_anim=1;



//function setupGrid(){
const cGrid = [];
for (let i=0; i< 25; i++) {
    cGrid[i] = [];
    for (let j = 0; j<15; j++) {
        cGrid[i][j] = 0;
    }
}

// column base
cGrid[13][4]=1;
cGrid[11][4]=1;
cGrid[12][4]=1;
cGrid[13][5]=1;
cGrid[11][5]=1;
cGrid[12][5]=1;
cGrid[13][6]=1;
cGrid[11][6]=1;
cGrid[12][6]=1;

cGrid[ 0][0]=1;
cGrid[ 0][1]=1;
cGrid[ 0][2]=1;
cGrid[ 0][3]=1;
cGrid[ 0][4]=1;
cGrid[ 0][5]=1;
cGrid[ 0][6]=1;
cGrid[ 0][6]=1;
cGrid[ 0][7]=1;
cGrid[ 0][8]=1;
cGrid[ 0][9]=1;
cGrid[ 0][10]=1;
cGrid[ 0][11]=1;

cGrid[ 1][0]=1;
cGrid[ 1][1]=1;
cGrid[ 1][2]=1;
cGrid[ 1][3]=1;
cGrid[ 1][4]=1;
cGrid[ 1][5]=1;
cGrid[ 1][9]=1;
cGrid[ 1][10]=1;
cGrid[ 1][11]=1;

cGrid[ 1][0]=1;
cGrid[ 1][1]=1;
cGrid[ 1][2]=1;
cGrid[ 1][3]=1;
cGrid[ 1][4]=1;
cGrid[ 1][5]=1;
cGrid[ 1][8]=1;
cGrid[ 1][9]=1;
cGrid[ 1][10]=1;
cGrid[ 1][11]=1;

cGrid[2][0]=1;
cGrid[2][1]=1;
cGrid[2][2]=1;
cGrid[2][3]=1;
cGrid[2][9]=1;
cGrid[2][10]=1;
cGrid[2][11]=1;

cGrid[ 3][0]=1;
cGrid[ 3][1]=1;
cGrid[ 3][10]=1;
cGrid[ 3][11]=1;

cGrid[ 4][0]=1;
cGrid[ 4][1]=1;
cGrid[ 4][10]=1;
cGrid[ 4][11]=1;

cGrid[ 5][0]=1;
cGrid[ 5][1]=1;
cGrid[ 5][11]=1;

cGrid[ 6][0]=1;
cGrid[ 6][1]=1;
cGrid[ 6][11]=1;

cGrid[ 7][0]=1;
cGrid[ 7][1]=1;
cGrid[ 7][11]=1;

cGrid[ 8][0]=1;
cGrid[ 8][1]=1;
cGrid[ 8][11]=1;

cGrid[ 9][0]=1;
cGrid[ 9][1]=1;
cGrid[ 9][11]=1;

cGrid[10][0]=1;
cGrid[10][1]=1;
cGrid[10][11]=1;

cGrid[11][0]=1;
cGrid[11][1]=1;
cGrid[11][11]=1;

cGrid[12][0]=1;
cGrid[12][1]=1;
cGrid[12][11]=1;

cGrid[12][0]=1;
cGrid[13][1]=1;
cGrid[12][11]=1;

cGrid[13][0]=1;
cGrid[14][1]=1;
cGrid[13][11]=1;

cGrid[14][0]=1;
cGrid[14][1]=1;
cGrid[14][11]=1;

cGrid[15][0]=1;
cGrid[15][1]=1;
cGrid[15][11]=1;

cGrid[16][0]=1;
cGrid[16][1]=1;
cGrid[16][11]=1;

cGrid[17][0]=1;
cGrid[17][1]=1;
cGrid[17][11]=1;

cGrid[18][0]=1;
cGrid[18][1]=1;
cGrid[18][11]=1;

cGrid[19][0]=1;
cGrid[19][1]=1;
cGrid[19][10]=1;
cGrid[19][11]=1;

cGrid[20][0]=1;
cGrid[20][1]=1;
cGrid[20][2]=1;
cGrid[20][10]=1;
cGrid[20][11]=1;

cGrid[21][0]=1;
cGrid[21][1]=1;
cGrid[21][2]=1;
cGrid[21][10]=1;
cGrid[21][11]=1;

cGrid[22][0]=1;
cGrid[22][1]=1;
cGrid[22][2]=1;
cGrid[22][3]=1;
cGrid[22][9]=1;
cGrid[22][10]=1;
cGrid[22][11]=1;

cGrid[23][0]=1;
cGrid[23][1]=1;
cGrid[23][2]=1;
cGrid[23][3]=1;
cGrid[23][4]=1;
cGrid[23][5]=1;
cGrid[23][6]=1;
cGrid[23][8]=1;
cGrid[23][9]=1;
cGrid[23][10]=1;
cGrid[23][11]=1;

cGrid[24][0]=1;
cGrid[24][1]=1;
cGrid[24][2]=1;
cGrid[24][3]=1;
cGrid[24][4]=1;
cGrid[24][5]=1;
cGrid[24][6]=1;
cGrid[24][7]=1;
cGrid[24][8]=1;
cGrid[24][9]=1;
cGrid[24][10]=1;
cGrid[24][11]=1;