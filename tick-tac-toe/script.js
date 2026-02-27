// FActory wrapped in IIFE (immediately invoked function expression)
//
const BoardFactory = (function () {
  function board() {
    const gameBoard = Array(9).fill(null);
    return { gameBoard };
  }
  return { board };
})();

console.log(BoardFactory.board());
