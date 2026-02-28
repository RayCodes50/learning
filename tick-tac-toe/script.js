// FActory wrapped in IIFE (immediately invoked function expression)
const BoardFactory = (function () {
  function board() {
    const gameBoard = Array(9).fill(null);
    return { gameBoard };
  }
  return { board };
})();
const board = BoardFactory.board();
board.gameBoard[1] = "X";
console.log(board.gameBoard);

// Player constructor
const CreatePlayer = (function () {
  function createPlayer(name, marker) {
    return { name, marker };
  }
  return { createPlayer };
})();

//create a new player1
const player1 = CreatePlayer.createPlayer("Steve", "X");
console.log(player1.marker);
player1.crossField(3);

const GameController = function () {
  //handle turns
  //switch players
  // check winner
};
// the part of game logic?
board.gameBoard[2] = player1.marker;
// board.gameBoard[4] = player2.marker;
console.log(board.gameBoard);

// crossing field logic
// function crossField(position) {
//   return (board.gameBoard[position] = marker);
// }
