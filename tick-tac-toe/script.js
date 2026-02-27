// FActory wrapped in IIFE (immediately invoked function expression)
//
const BoardFactory = (function () {
  function board() {
    const gameBoard = Array(9).fill(null);
    return { gameBoard };
  }
  return { board };
})();
const board = BoardFactory.board();
board.gameBoard[1] = "X";
board.gameBoard[5] = "O";
console.log(board.gameBoard);

// Player constructor
function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the new operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
}

//create a new player1
const player1 = new Player("Steve", "X");
console.log(player1.marker);

// the part of game logic?
board.gameBoard[2] = player1.marker;
console.log(board.gameBoard);
