document.addEventListener("DOMContentLoaded", startGame);

// Define your `board` object here!

let board = {
  // my comments
  // cells is an array in board, which is an object
  // in the array are tiles, or more objects in cells
  // need to add a property to each tile "isMine"
  // fin.
  cells: [
    {
      row: 0,
      col: 0,
      isMine: true,
      hidden: true,
      isMarked: false,
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true,
      isMarked: false,
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
    },

    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true,
      isMarked: false,
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      hidden: true,
      isMarked: false,
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
    },

    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true,
      isMarked: false,
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true,
      isMarked: false,
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
    },
  ],
};

// console.log(board.cells)

for (let i = 0; i < board.cells.length; i++) {
  countSurroundingMines(board.cells[i]);
}

// console.log(totalFalseMines)

function startGame() {
  // Don't remove this function call: it makes the game work!
  lib.initBoard();
  
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

    lib.displayMessage("You win!");
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let counter = 0;
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      counter++;
    }
  }
  cell.surroundingMines = counter;
}

console.log(board.cells);
