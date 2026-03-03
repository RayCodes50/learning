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
const createPlayer = function (name, marker) {
  return { name, marker };
};

const GameController = (() => {
  const player1 = createPlayer("Steve", "X");
  const player2 = createPlayer("Ewa", "O");
  let currentPlayer = player1;
  let full = false;
  let winner = false;
  let valid;
  let oldMark = "";

  //call board methods
  function playRound(index) {
    valid = validMove(index);
    if (!valid) {
      return {
        winner,
        full,
        oldMark,
        currentPlayer,
        valid,
      };
    }
    oldMark = currentPlayer.marker;
    board.placeMarker(index, currentPlayer.marker);
    winner = winnerCheck();
    if (winner) {
      // if win happens  let UI know
      return {
        winner,
        full,
        oldMark,
        currentPlayer,
        valid,
      };
    }
    full = board.isFull();
    if (full) {
      // if DRAW happens let UI know

      return {
        winner,
        full,
        oldMark,
        currentPlayer,
        valid,
      };
    }
    GameController.switchPlayer();
    return {
      winner,
      full,
      oldMark,
      currentPlayer,
      valid,
    };
  }
  //switch players
  function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
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
      }
    }
    return false;
  }
  function validMove(index) {
    return board.isEmpty(index);
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
    const status = document.querySelector(".status");
    const handlers = [];
    cells.forEach((el, index) => {
      function handleClick() {
        const result = GameController.playRound(index);
        console.log(result);
        if (!result.valid) return console.log(`invalid move`);
        placeSvg(result.oldMark, index, el);
        changeName(result.currentPlayer);
        if (result.full) {
          status.innerText = `It's a draw`;
          status.classList.toggle("visibility");
          cells.forEach((cell, idx) =>
            cell.removeEventListener("click", handlers[idx]),
          );
        }
        if (result.winner) {
          status.innerText = `Winner ${result.currentPlayer.name}`;
          status.classList.toggle("visibility");
          cells.forEach((cell, idx) =>
            cell.removeEventListener("click", handlers[idx]),
          );
        }
      }
      el.addEventListener("click", handleClick);
      handlers[index] = handleClick;
    });
  }
  // function changing name in html turn
  function changeName(player) {
    const htmlName = document.querySelector(".player");

    htmlName.innerText = player.name;
  }
  return { startTheGame, changeName };

  //update the screen with x and o
  function placeSvg(marker, index, el) {
    switch (marker) {
      case "X":
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100"> <title>alpha-x</title> <path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z"/></svg>`;
        break;
      case "O":
        el.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100"
            height="100"
          >
            <title>circle-outline</title>
            <path
              d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>`;
        break;
    }
  }
})();
DisplayController.startTheGame();
