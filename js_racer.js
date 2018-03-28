window.onload = function() {
  game.keyListener()
  game.formListener()
  game.displayGameCount()
}

var Racer = function(){};
var game = new Racer();

let gameCount = 0;
Racer.inProgress = true;

Racer.prototype.displayGameCount = function() {
  let scoreElement = document.getElementById("score")
  let storedGameCount = window.localStorage.getItem('gameCount')
  if(storedGameCount) {
    scoreElement.innerHTML = storedGameCount;
    gameCount = storedGameCount;
  } else {
    scoreElement.innerHTML = gameCount;
  }
}


Racer.prototype.keyListener = function(){
  document.addEventListener('keyup', function(event){
    game.whichPlayer(event)
  })
}

Racer.prototype.formListener = function() {
  const playersForm = document.getElementById("players-form");
  playersForm.addEventListener("submit", function(e){
    e.preventDefault();
    let player1Name = document.getElementById('player-1-name').value;
    let player2Name = document.getElementById('player-2-name').value;

    let welcome = document.getElementById('welcome')
    welcomeMessage = " " + player1Name + " and " + player2Name + "!"
    welcome.innerHTML += welcomeMessage
  });
}

Racer.prototype.whichPlayer = function(event){

  if (event.keyCode === 39 || event.keyCode === 81) {
    var player = document.getElementById("player-1");
    game.movePlayer(player);
  }
  else if (event.keyCode === 68 || event.keyCode === 80) {
    var player = document.getElementById("player-2");
    game.movePlayer(player);
  }
}

Racer.prototype.movePlayer = function(player){
  game.checkWinner(player);
  player.nextElementSibling.id = player.id;
  player.id = "";
}

Racer.prototype.saveToLocalStorage = function() {
  window.localStorage.setItem("gameCount", gameCount)
}

Racer.prototype.checkWinner = function(player){
  if (player.nextElementSibling == null && Racer.inProgress == true ){
    Racer.inProgress = false
    gameCount +=1;
    this.displayGameCount();
    this.saveToLocalStorage();
    alert( player.id.charAt(0).toUpperCase() + player.id.slice(1) + ' Wins!')
  }
}


