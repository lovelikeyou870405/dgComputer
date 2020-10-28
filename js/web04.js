var player=0;   //0:O; 1:X;
var isEnd=0;    //0:playing; 1:ending;
var ground=['','','',
            '','','',
            '','',''];
//

function spanOnclick(s){
    var spstr = 's'+s;
    if(isEnd==0)
    {
        //game playing:
        if(isNull(s-1))
        {
            //check can i input something? yes:
            if(player==0)
            {
                //player1 put O:
                document.getElementById(spstr).textContent="O";
                ground[s-1]='O';
                console.log(s+':'+ground[s-1]);
                player=1;
                document.getElementById("who").textContent="player2";
           }
            else
            {
                //player2 put X:
               document.getElementById(spstr).textContent="X";
                ground[s-1]='X';
                console.log(s+':'+ground[s-1]);
                player=0;
                document.getElementById("who").textContent="player1";
            }
            checkWin();
            document.getElementById(spstr).style="cursor:text";
        }
    }
    else
    {
        //game ending:
    }
    
}

function isNull(i){
    if(ground[i]==''){
        return 1;
    }
    else
    {
        return 0;
    }
}

function checkWin(){
    console.log(ground);
    if( (ground[0]=="O" && ground[1]=="O" && ground[2]=="O") ||
    (ground[3]=="O"&&ground[4]=="O"&&ground[5]=="O")||
    (ground[6]=="O"&&ground[7]=="O"&&ground[8]=="O")||
    (ground[0]=="O"&&ground[3]=="O"&&ground[6]=="O")||
    (ground[1]=="O"&&ground[4]=="O"&&ground[7]=="O")||
    (ground[2]=="O"&&ground[5]=="O"&&ground[8]=="O")||
    (ground[0]=="O"&&ground[4]=="O"&&ground[8]=="O")||
    (ground[2]=="O"&&ground[4]=="O"&&ground[6]=="O")){
        //check wheater if player1 is win? yes:
        whoWin(0);
    }
    else if((ground[0]=="X"&&ground[1]=="X"&&ground[2]=="X")||
    (ground[3]=="X"&&ground[4]=="X"&&ground[5]=="X")||
    (ground[6]=="X"&&ground[7]=="X"&&ground[8]=="X")||
    (ground[0]=="X"&&ground[3]=="X"&&ground[6]=="X")||
    (ground[1]=="X"&&ground[4]=="X"&&ground[7]=="X")||
    (ground[2]=="X"&&ground[5]=="X"&&ground[8]=="X")||
    (ground[0]=="X"&&ground[4]=="X"&&ground[8]=="X")||
    (ground[2]=="X"&&ground[4]=="X"&&ground[6]=="X")){
        //check wheater if player2 is win? yes:
        whoWin(1);
    }
    else if(ground[0]!=''&&ground[1]!=''&&ground[2]!=''&&ground[3]!=''&&ground[4]!=''&&ground[5]!=''&&ground[6]!=''&&ground[7]!=''&&ground[8]!=''){
        //check wheater if peace? yes:
        isEnd=1;
        document.getElementById("state").innerHTML='you two are peace !';
    }
}

function whoWin(p){
    console.log(p+'win');
    isEnd=1;
    document.getElementById("state").innerHTML='<span id="who">player1</span> is win !';
    if(p==0){
        //player1 is win:
        document.getElementById("who").textContent='player1';
    }
    else{
        //player2 is win:
        document.getElementById("who").textContent="player2";
    }
}

function restartGame(){
    player=0;   //0:O; 1:X;
    isEnd=0;    //0:playing; 1:ending;
    ground=['','','',
            '','','',
            '','',''];
    document.getElementById("state").innerHTML='<span id="who">player1</span>\'s trun.';
    for(i=1;i<=9;i++){
        var spstr = 's'+i;
        console.log(spstr);
        document.getElementById(spstr).textContent=null;
    }
}