// object
class player {
    constructor() {
        this.choose = null;
    }
    getPlayerChoose(choose) {
        this.choose = choose;
    }
}

class computer extends player {
    constructor() {
        super();
    }
    getComputerChoose(){
        let chooses = ["batu", "kertas", "gunting"];
        let select = chooses[Math.floor(Math.random() * chooses.length)]; 
        return (this.choose = select);
    }
}

class game {
    constructor(player, com){
        this.player = player;
        this.computer = com;
        this.result = null;

        this.playerSection = document.querySelectorAll (".player-side button");
        this.textBox = document.querySelector ("#result");
        this.textResult = document.querySelector(".outcome");
        this.refresh = document.getElementById("refresh");
    }
    gameResult(player, com){
        if (player.choose == com.choose) 
            return (this.result = "draw");
        if (player.choose == "batu")
            return com.choose == "gunting"
                ? (this.result = "player 1 win")
                : (this.result = "com win");
        if (player.choose == "kertas")
            return com.choose == "batu"
                ? (this.result = "player 1 win")
                : (this.result = "com win");
        if (player.choose == "gunting")
            return com.choose == "kertas"
                ? (this.result = "player 1 win")
                : (this.result = "com win");
    }
    setActive(player, com) {
        const p = document.getElementById(player.choose);
        const c = document.getElementById("com-" + com.choose);
        p.classList.add("active");

        setTimeout(() => {
            c.classList.add("active");
            this.textBox.classList.add(
                "rotate",
                "d-flex",
                "align-items-center",
                "justify-content-center"
            );
            this.textResult.innerHTML = this.result;
            this.textResult.classList.replace("vs", "game-result");
            if (this.result == "draw") {
                this.textBox.classList.add("game-result-draw");
            } else {
                this.textBox.classList.add("game-result-win");
            }
        }, 0);
    }

    setRefresh(player, com) {
        const p = document.getElementById(player.choose);
        const c = document.getElementById("com-" + com.choose);
        p.classList.remove("active");
        c.classList.remove("active");
        this.textBox.classList.remove(
            "rotate",
            "d-flex",
            "align-items-center",
            "justify-content-center"
        );
        this.textResult.innerHTML = "vs";
        this.textResult.classList.replace("game-result", "vs");
        if (this.result == "draw") {
            this.textBox.classList.remove("game-result-draw");
        } else {
            this.textBox.classList.remove("game-result-win");
        }
    }
}


let player1 = new player();
let com = new computer();
let play = new game(player1, com);


let counter = 0;

const playerSide = () => {
    let playerSelect = play.playerSection;
    playerSelect.forEach((select) => {
        select.addEventListener("click", () => {
            if (counter == 0) {
                
                let playerSelect = select.id;
                player1.getPlayerChoose(playerSelect);
                
                let comSelect = com.getComputerChoose();
                
                let result = play.gameResult(player1, com);
                
                play.setActive(player1, com);
                counter++;
                
                console.log(`Player 1 : ${playerSelect}`);
                setTimeout(() => {
                    console.log(`Com : ${comSelect}`);
                    console.log(`Result : ${result}`);
                }, 2000);
            }
        });
    });
};
playerSide();


// * refresh buttons
const refreshBtn = () => {
    play.refresh.addEventListener("click", () => {
        play.setRefresh(player1, com);
        counter = 0;
    });
};
refreshBtn();
