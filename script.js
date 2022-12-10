// object
class player {
    constructor() {
        this.choose = null;
    }
    setPlayerChoose(choose) {
        this.choose = choose;
    }
}

class computer extends player {
    constructor() {
        super();
    }
    setComputerChoose() {
        const chooses = ["com-batu", "com-kertas", "com-gunting"];
        const select = chooses[Math.floor(Math.random() * chooses.length)];
        return (this.choose = select);
    }
}

class game {
    constructor(player, com) {
        this.player = player;
        this.computer = com;
        this.result = null;

        this.playerSection = document.querySelectorAll(".player-side button");
        this.textBox = document.getElementById("result");
        this.textResult = document.querySelector(".outcome");
        // this.refresh = document.getElementById("refresh");
    }
    gameResult(player, com) {
        if (player.choose == "player-batu" && com.choose == "com-batu") {
            (this.result = "draw");
        }
        if (player.choose == "player-kertas" && com.choose == "com-kertas") {
            (this.result = "draw");
        }
        if (player.choose == "player-gunting" && com.choose == "com-gunting") {
            (this.result = "draw");
        }
        if (player.choose == "player-batu") {
            if (com.choose == "com-gunting") {
                (this.result = "player 1 win")
            }
            else { (this.result = "com win"); }
        }
        if (player.choose == "player-kertas") {
            if (com.choose == "com-batu") {
                (this.result = "player 1 win")
            }
            else {
                (this.result = "com win");
            }
        }
        if (player.choose == "player-gunting") {
            if (com.choose == "com-kertas") {
                (this.result = "player 1 win")
            }
            else { (this.result = "com win"); }
        }
    }
    setActive(player, com) {
        console.log("debug", player.choose)
        let p
        if (player.choose === "player-batu") {
            p = document.getElementById("player-batu")
        } else if (player.choose === "player-kertas") {
            p = document.getElementById("player-kertas")
        } else {
            p = document.getElementById("player-gunting")
        }
        p.classList.add("active")

        let c
        if (com.choose === "com-batu") {
            c = document.getElementById("com-batu")
        } else if (com.choose === "com-kertas") {
            c = document.getElementById("com-kertas")
        } else {
            c = document.getElementById("com-gunting")
        }
        c.classList.add("active");

        this.textBox.classList.add(
            "active"
        );
        this.textResult.innerHTML = this.result;
        this.textResult.classList.replace("outcome", "game-result");
        if (this.result == "draw") {
            this.textBox.classList.add("game-result-draw");
        } else {
            this.textBox.classList.add("game-result-win");
        }
    }

    setRefresh(player, com) {
        const p = document.getElementById(player.choose);
        const c = document.getElementById(com.choose);
        p.classList.remove("active");
        c.classList.remove("active");
        this.textBox.classList.remove(
            "active"
        );
        this.textResult.innerHTML = "vs";
        this.textResult.classList.replace("game-result", "outcome");
        if (this.result == "draw") {
            this.textBox.classList.remove("game-result-draw");
        } else {
            this.textBox.classList.remove("game-result-win");
        }
    }
}


let human = new player();
let com = new computer();
let play = new game(human, com);



// * refresh buttons
const refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
    play.setRefresh(human, com);
    counter = 0;
});

const btnbatu = document.getElementById("player-batu")
btnbatu.addEventListener("click", () => {
    human.setPlayerChoose("player-batu");

    com.setComputerChoose();

    play.gameResult(human, com);

    play.setActive(human, com);
})
const btnkertas = document.getElementById("player-kertas")
btnkertas.addEventListener("click", () => {
    human.setPlayerChoose("player-kertas");

    com.setComputerChoose();

    play.gameResult(human, com);

    play.setActive(human, com);
})
const btngunting = document.getElementById("player-gunting")
btngunting.addEventListener("click", () => {
    human.setPlayerChoose("player-gunting");

    com.setComputerChoose();

    play.gameResult(human, com);

    play.setActive(human, com);
})
