function Player(mark) {
  this.mark = mark;
}


function Space(x, y){
  this.x = x;
  this.y = y;
  this.player = {};
  this.clicked = false;
  this.markedBy = function(player) {
    if (player) {
      this.player = player;
    }

    return this.player;
  }

}

function Board() {
  this.spaces = [];
  this.spaces.push(new Space(1,1));
  this.spaces.push(new Space(1,2));
  this.spaces.push(new Space(1,3));
  this.spaces.push(new Space(2,1));
  this.spaces.push(new Space(2,2));
  this.spaces.push(new Space(2,3));
  this.spaces.push(new Space(3,1));
  this.spaces.push(new Space(3,2));
  this.spaces.push(new Space(3,3));
}

Board.prototype.find = function(x, y) {
  for (var index in this.spaces) {
    if (this.spaces[index].x == x && this.spaces[index].y == y) {
      return this.spaces[index];
    }
  }
};

function Game() {
  var playerX = new Player('X');
  var playerO = new Player('O');
  var board = new Board();
  var turn = 1;
  var whoTurn = function() {
    if (turn === 1 ) {
      return playerX;
    }
    else {
      return playerO;
    }
  };
  var turnToggle = function() {
    turn *= -1
  };

  var winning = function() {
    var center = board.find(2, 2).markedBy().mark;
    if ((board.find(1, 1).markedBy().mark == center) && (board.find(3, 3).markedBy().mark == center) && (typeof center != 'undefined')){
      alert(center);
    } else if ((board.find(1, 3).markedBy().mark == center) && (board.find(3, 1).markedBy().mark == center) && (typeof center != 'undefined')) {
      alert('winning');
    }


    for (var i = 1; i<4; i++) {
      var marksY = [];
      var marksX = [];
      for(var j= 1; j<4; j++) {
        marksY.push(board.find(i, j).markedBy().mark);
        if ((marksY[0] == marksY[1]) && (marksY[0] == marksY[2]) && (typeof marksY[0] != 'undefined')) {
          alert('hi');
        }
        marksX.push(board.find(j, i).markedBy().mark);
        if ((marksX[0] == marksX[1]) && (marksX[0] == marksX[2]) && (typeof marksX[0] != 'undefined')) {
          alert('hey');
        }
        console.log(marksX[0] + " " + marksX[1] + " " + marksX[2]);
      }


    }

  };

  return { playerX  : playerX,
            playerO : playerO,
            board   : board,
            whoTurn : whoTurn,
            turnToggle : turnToggle,
            winning : winning }
}


$(document).ready(function() {
  var game = new Game();
  $('.player').text(game.whoTurn().mark);

  $('#one-one').click(function() {

    if (!game.board.find(1, 1).clicked){
      var player = game.board.find(1, 1).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(1, 1).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#one-two').click(function() {

    if (!game.board.find(1, 2).clicked){
      var player = game.board.find(1, 2).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(1, 2).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#one-three').click(function() {

    if (!game.board.find(1, 3).clicked){
      var player = game.board.find(1, 3).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(1, 3).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#two-one').click(function() {

    if (!game.board.find(2, 1).clicked){
      var player = game.board.find(2, 1).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(2, 1).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#two-two').click(function() {

    if (!game.board.find(2, 2).clicked){
      var player = game.board.find(2, 2).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(2, 2).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#two-three').click(function() {

    if (!game.board.find(2, 3).clicked){
      var player = game.board.find(2, 3).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(2, 3).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#three-one').click(function() {

    if (!game.board.find(3, 1).clicked){
      var player = game.board.find(3, 1).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(3, 1).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#three-two').click(function() {

    if (!game.board.find(3, 2).clicked){
      var player = game.board.find(3, 2).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(3, 2).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });

  $('#three-three').click(function() {

    if (!game.board.find(3, 3).clicked){
      var player = game.board.find(3, 3).markedBy(game.whoTurn());
      if (player.mark === "X") {
        $(this).append("<i class='fa fa-times fa-5x'></i>");
      }
      else {
        $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
      }

      game.board.find(3, 3).clicked = true;
      game.turnToggle();
      $('.player').text(game.whoTurn().mark);
      game.winning();
    }
  });
});
