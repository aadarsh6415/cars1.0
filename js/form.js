class Form{
    constructor(){
        this.input = createInput('name')
        this.button = createButton('play')
        this.greating = createElement('h4')

    }
    hide(){
        this.greating.hide()
        this.button.hide()
        this.input.hide()
    }
display(){
    var title = createElement('h2','car racing game')
        
title.position(130,0)
this.input.position(130,160)
this.button.position(250,200)
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
player.name = this.input.value()
playerCount=playerCount+1
player.index=playerCount
player.updateCount(playerCount)
player.update()
this.greating.html("hello"+name)
this.greating.position(130,160)
})
}
}