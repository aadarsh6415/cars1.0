var ball;
var playerCount,gameState=0;
var player,form,game;

function setup(){
    createCanvas(500,500);
     database = firebase.database();
     game = new Game()
     game.getState()
     game.start()
   }


function draw(){
       if(playerCount===4){
         game.updateState(1)
       }
      if(gameState===1) {
        game.play()
      } 
       
}

