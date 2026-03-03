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
  function isEmpty(index) {
    return gameBoard[index] === null;
  }
  return { placeMarker, showBoard, resetBoard, isFull, isEmpty };
})();

// Player create factory
createPlayer = function (name, marker) {
  return { name, marker };
};

const GameController = (() => {
  const player1 = createPlayer("Steve", "X");
  const player2 = createPlayer("Ewa", "O");
  let currentPlayer = player1;
  let full = false;
  let winner = false;

  //call board methods
  function playRound(index) {
    const empty = validMove(index);
    if (!empty) {
      const move = { move: false };
      return {
        winner,
        full,
        currentPlayer,
      };
    }
    board.placeMarker(index, currentPlayer.marker);
    winner = GameController.winnerCheck();
    if (winner) {
      // if win happens  let UI know
      return {
        winner,
        full,
        currentPlayer,
      };
    }
    full = board.isFull();
    if (full) {
      // if DRAW happens let UI know

      return {
        winner,
        full,
        currentPlayer,
      };
    }
    GameController.switchPlayer();
    return {
      winner,
      full,
      currentPlayer,
    };
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
        return true;
      } else {
      }
    }
    return false;
  }
  function validMove(index) {
    if (board.isEmpty(index)) {
      return true;
    } else {
      return false;
    }
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
    validMove,
    // get winner() {
    //   return winner;
    // },
  };
})();
// Display controller
const DisplayController = (() => {
  //listen for clicks
  function startTheGame() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((el, index) => {
      el.addEventListener("click", () => {
        console.log(`you clicked ${el} of index ${index}`);
        const result = GameController.playRound(index);
        changeName(result.currentPlayer);
        console.log(result);
      });
    });
  }
  function changeName(player) {
    const htmlName = document.querySelector(".player");

    htmlName.innerText = player.name;
  }
  return { startTheGame, changeName };

  //update the screen
})();
DisplayController.startTheGame();
