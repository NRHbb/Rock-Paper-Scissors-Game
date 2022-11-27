// DOM
this.playerSection = document.getElementById("")
this.comSection
this.result
this.refresh

// object
class Player{
    constructor(){
        this.choice = null;
    }
    getPlayerChoice(choice){
        this.choice = choice;
    }
}
class UserPlayer extends Player{
    constructor(){
        super()
    }
    getUserPlayerChoice(){
        const choice = ["batu", "gunting", "kertas"];
        this.getPlayerChoice()
    }
}
class UserCom extends Player{
    constructor(){
        super()
    }
    getUserComChoice(){
        const choice = ["batu", "gunting", "kertas"];
        const select = choice[Math.floor(Math.random()*choice.length)] 
    } 

}