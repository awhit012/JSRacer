window.onload = function() {
  game.keyListener()
}

var Racer = function(){};
var game = new Racer();

Racer.inProgress = true;

Racer.prototype.keyListener = function(){
  document.addEventListener('keyup', function(event){
    game.whichPlayer(event)
  })
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

Racer.prototype.checkWinner = function(player){
  if (player.nextElementSibling == null && Racer.inProgress == true ){
    Racer.inProgress = false
    alert( player.id.charAt(0).toUpperCase() + player.id.slice(1) + ' Wins!')
  }
}

