 
class Player {
    constructor() {
      this.choose = null;
    }
  
    setPlayerChoose(choose) {
      this.choose = choose;
    }
  }
  
  class Computer extends Player {
    setComputerChoose() {
      const chooses = ["com-batu", "com-kertas", "com-gunting"];
      const select = chooses[Math.floor(Math.random() * chooses.length)];
      this.choose = select;
      return select;
    }
  }
  
  class Game {
    constructor(player, computer) {
      this.player = player;
      this.computer = computer;
      this.result = null;
  
      this.textBox = document.getElementById("result");
      this.textResult = document.querySelector(".outcome");
      this.refresh = document.getElementById("refresh");
  
      this.isResultDisplayed = false;
  
      this.refresh.addEventListener("click", () => {
        this.setRefresh();
      });
    }
  
    gameResult(player, computer) {
      const playerChoose = player.choose;
      const computerChoose = computer.choose;
  
      if (
        (playerChoose === "player-batu" && computerChoose === "com-gunting") ||
        (playerChoose === "player-kertas" && computerChoose === "com-batu") ||
        (playerChoose === "player-gunting" && computerChoose === "com-kertas")
      ) {
        this.result = "player 1 win";
      } else if (playerChoose === computerChoose) {
        this.result = "draw";
      } else {
        this.result = "com win";
      }
  
      this.isResultDisplayed = true;
      return this.result;
    }
  
    setActive(player, computer) {
      const playerElement = document.getElementById(player.choose);
      const computerElement = document.getElementById(computer.choose);
  
      playerElement.classList.add("active");
      computerElement.classList.add("active");
  
      this.textBox.classList.add("active");
      this.textResult.innerHTML = this.result;
      this.textResult.classList.replace("outcome", "game-result");
  
      if (this.result === "draw") {
        this.textBox.classList.add("game-result-draw");
      } else {
        this.textBox.classList.add("game-result-win");
      }
    }
  
    setRefresh() {
      const playerElement = document.getElementById(this.player.choose);
      const computerElement = document.getElementById(this.computer.choose);
  
      playerElement.classList.remove("active");
      computerElement.classList.remove("active");
  
      this.textBox.classList.remove("active");
      this.textResult.innerHTML = "vs";
      this.textResult.classList.replace("game-result", "outcome");
  
      if (this.result === "draw") {
        this.textBox.classList.remove("game-result-draw");
      } else {
        this.textBox.classList.remove("game-result-win");
      }
  
      this.isResultDisplayed = false;
    }
  }
  
  const human = new Player();
  const com = new Computer();
  const play = new Game(human, com);
  
  // Play buttons
  const btnbatu = document.getElementById("player-batu");
  btnbatu.addEventListener("click", () => {
    if (!play.isResultDisplayed) {
      human.setPlayerChoose("player-batu");
      com.setComputerChoose();
      play.gameResult(human, com);
      play.setActive(human, com);
    }
  });
  
  const btnkertas = document.getElementById("player-kertas");
  btnkertas.addEventListener("click", () => {
    if (!play.isResultDisplayed) {
      human.setPlayerChoose("player-kertas");
      com.setComputerChoose();
      play.gameResult(human, com);
      play.setActive(human, com);
    }
  });
  
  const btngunting = document.getElementById("player-gunting");
  btngunting.addEventListener("click", () => {
    if (!play.isResultDisplayed) {
      human.setPlayerChoose("player-gunting");
      com.setComputerChoose();
      play.gameResult(human, com);
      play.setActive(human, com);
    }
  });
  
