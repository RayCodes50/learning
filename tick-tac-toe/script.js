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
  function isFull() {
    return gameBoard.every((cell) => cell !== null);
  }
  return { placeMarker, showBoard, resetBoard, isFull };
})();

// Player create factory
createPlayer = function (name, marker) {
  return { name, marker };
};

const GameController = (() => {
  const player1 = createPlayer("Steve", "X");
  const player2 = createPlayer("Ewa", "O");
  let currentPlayer = player1;

  //call board methods
  // I M P O R T A N T
  // index deosn't exist yet I M P O R T A N T
  function playRound(index) {
    board.placeMarker(index, player.marker);
    const winner = GameController.winnerCheck();
    const full = board.isFull();
    if (full) {
      return `Game Draw`;
    }
    GameController.switchPlayer();
    return { index, marker: player.marker, winner, full, next: currentPlayer }; // for debuging
  }
  //switch players
  function switchPlayer() {
    currentPlayer = player2;
  }

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
  return {
    winnerCheck,
    playRound,
    switchPlayer,
    player1,
    player2,
    get currentPlayer() {
      return currentPlayer;
    },
  };
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
