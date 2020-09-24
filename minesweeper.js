document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!


 let board = {
    // cells is an array in board, which is an object
    // in the array are tiles, or more objects in cells
    // need to add a property to each tile "isMine"
  cells: [
    cell0 = {row:0,col:0,isMine:true,hidden:true}, 
    cell1 = {row:1,col:0,isMine:false,hidden:true},
    cell2 = {row:0,col:1,isMine:false,hidden:true},
    cell3 = {row:1,col:1,isMine:false,hidden:true}
    // {row:0,col:0},
    // {row:1,col:0},
    // {row:0,col:1},
    // {row:1,col:1}
    ]

  


 }



console.log(board.cells)

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

