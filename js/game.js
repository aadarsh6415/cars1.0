class Game{
    constuctor(){

}
updateState(state){
database.ref('/').update({
    gameState:state
})
}
getState(){
    console.log("hai")
database.ref('gameState').on("value",function(data){
    gameState = data.val()
    console.log(gameState)
   
})
}
start(){
     if(gameState===0){
        player=new Player();
        player.getCount()
        form=new Form()
        form.display()
    }

}
play(){
    form.hide();
    text("gameStart",120,100)
    player.getPlayerInfo()
    if (allPlayers!==undifine){
var displayPosition=130
for(var plr in allPlayers){
if (plr==="player"+players.index){
fill("red")
}
else{fill("black")}
displayPosition=displayPosition+20
text(allPlayers[plr].name+allPlayers[plr].distance,120,displayPosition)
}
    }
    if(keyDown(upArrow)){
        player.distance=player.distance+50
        player.update()
    }
}

}
