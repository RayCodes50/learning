// FActory wrapped in IIFE (immediately invoked function expression)
const BoardFactory = (function () {
  //create and store board state
  function board() {
    const gameBoard = Array(9).fill(null);
    return { gameBoard };
  }
  return { board };
  //place markers
  //board resetting
})();
const board = BoardFactory.board();
board.gameBoard[1] = "X";
console.log(board.gameBoard);

// Player create factory
const CreatePlayer = (function () {
  function createPlayer(name, marker) {
    return { name, marker };
  }
  return { createPlayer };
})();

//create a new player1
const player1 = CreatePlayer.createPlayer("Steve", "X");
console.log(player1.marker);

const GameController = (function () {
  //handle picks turns
  function pick() {
    const index = Number(prompt("Choose from 0 to 8"));
    return index;
  }

  return { pick };
  //call board methods
  //validate moves
  //switch players
  // check winner
})();

// Display controller
const DisplayController = function () {
  //listen for clicks
  // gets uer input
  //call play round
  //update the screen
};

// the part of game logic?
board.gameBoard[2] = player1.marker;
// board.gameBoard[4] = player2.marker;
console.log(board.gameBoard);
const control = GameController.pick();
console.log(control);
// control();
// crossing field logic
// function crossField(position) {
//   return (board.gameBoard[position] = marker);
// }
//player1.crossField(3);
//
