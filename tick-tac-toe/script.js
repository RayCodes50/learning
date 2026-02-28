// FActory wrapped in IIFE (immediately invoked function expression)
const board = (() => {
  //create and store board state
  const gameBoard = Array(9).fill(null);

  function placeMarker(index, marker) {
    // return { gameBoard };
  }

  // show the board for deveelopment
  function showBoard() {
    return [...gameBoard];
  }
  return { placeMarker, showBoard };
  //place markers
  //board resetting
})();
// const board = BoardFactory.board();
console.log(board.showBoard());

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
// board.gameBoard[4] = player2.marker;
const control = GameController.pick();
console.log(control);
// control();
// crossing field logic
// function crossField(position) {
//   return (board.gameBoard[position] = marker);
// }
//player1.crossField(3);
//
