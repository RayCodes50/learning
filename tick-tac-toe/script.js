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

const GameController = (() => {
  //call board methods
  //validate moves
  //switch players
  // check winner
  function winnerCheck() {
    // Someone won outcome
    const boardStatus = board.showBoard();
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        boardStatus[a] &&
        boardStatus[a] === boardStatus[b] &&
        boardStatus[a] === boardStatus[c]
      ) {
        return `The winner is ${a}`;
      }
    }
    return `Game not finished`;
  }
  // board full or draw outcome to follow
  return { winnerCheck };
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
