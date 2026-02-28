// IIFE (immediately invoked function expression) for board state
const board = (() => {
  //create and store board state
  const gameBoard = Array(9).fill(null);

  //Place the player marker inside the board array
  function placeMarker(index, marker) {
    gameBoard[index] = marker;
  }

  // show the board for development
  function showBoard() {
    return [...gameBoard];
  }
  //board resetting
  function resetBoard() {
    gameBoard.fill(null);
  }
  return { placeMarker, showBoard, resetBoard };
})();

// Player create factory
createPlayer = function (name, marker) {
  return { name, marker };
};

//create a new player1
const player1 = createPlayer("Steve", "X");
console.log(player1.marker);

const GameController = (function () {
  return;
  //call board methods
  //validate moves
  //switch players
  // check winner
})();

// Display controller
const DisplayController = function () {
  //handle picks
  function pick() {
    const index = Number(prompt("Choose from 0 to 8"));
    return index;
  }
  return { pick };
  //listen for clicks
  // gets uer input
  //call play round
  //update the screen
};

// the part of game logic?
// board.gameBoard[4] = player2.marker;
const control = DisplayController.pick();
console.log(control);
// control();
// crossing field logic
// function crossField(position) {
//   return (board.gameBoard[position] = marker);
// }
//player1.crossField(3);
//
