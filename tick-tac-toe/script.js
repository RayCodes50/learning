// IIFE (immediately invoked function expression) for board state
const board = (() => {
  //create and store board state
  const gameBoard = Array(9).fill(null);
  // for testing endgame
  //const gameBoard = ["X", "X", null, "X", "X", "X", "X", "X", "X"];

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
  let winner = false;

  //call board methods
  // I M P O R T A N T
  // index deosn't exist yet I M P O R T A N T
  function playRound(index) {
    board.placeMarker(index, currentPlayer.marker);
    const winner = GameController.winnerCheck();
    if (winner) {
      // if win happens  let UI know
      return `${currentPlayer.name}`;
    }
    const full = board.isFull();
    if (full) {
      // if DRAW happens let UI know

      return `Game Draw`;
    }
    GameController.switchPlayer();
    return {
      index,
      marker: currentPlayer.marker,
      winner,
      full,
      next: currentPlayer,
    }; // for debuging
  }
  //switch players
  function switchPlayer() {
    if (currentPlayer == player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

  // check winner
  function winnerCheck() {
    console.log(`Winner check fired`);
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
      console.log(`Checking for loop`);

      const [a, b, c] = combo;
      if (
        boardStatus[a] &&
        boardStatus[a] === boardStatus[b] &&
        boardStatus[a] === boardStatus[c]
      ) {
        winner = true;
        return `The winner is ${currentPlayer}`;
      }
    }
    return `Game not finished`;
  }
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
