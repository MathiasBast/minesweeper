document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: false, hidden: true}, 
    {row: 1, col: 0, isMine: false, hidden: true}, 
    {row: 2, col: 0, isMine: true, hidden: true}, 
    {row: 3, col: 0, isMine: false, hidden: true},
    {row: 4, col: 0, isMine: false, hidden: true}, 
    {row: 0, col: 1, isMine: false, hidden: true}, 
    {row: 1, col: 1, isMine: true, hidden: true}, 
    {row: 2, col: 1, isMine: false, hidden: true},
    {row: 3, col: 1, isMine: false, hidden: true},
    {row: 4, col: 1, isMine: true, hidden: true}, 
    {row: 0, col: 2, isMine: false, hidden: true}, 
    {row: 1, col: 2, isMine: true, hidden: true}, 
    {row: 2, col: 2, isMine: false, hidden: true}, 
    {row: 3, col: 2, isMine: true, hidden: true},
    {row: 4, col: 2, isMine: false, hidden: true}, 
    {row: 0, col: 3, isMine: false, hidden: true}, 
    {row: 1, col: 3, isMine: false, hidden: true}, 
    {row: 2, col: 3, isMine: true, hidden: true},
    {row: 3, col: 3, isMine: false, hidden: true},
    {row: 4, col: 3, isMine: false, hidden: true}, 
    {row: 0, col: 4, isMine: false, hidden: true}, 
    {row: 1, col: 4, isMine: false, hidden: true}, 
    {row: 2, col: 4, isMine: true, hidden: true},
    {row: 3, col: 4, isMine: false, hidden: true},
    {row: 4, col: 4, isMine: false, hidden: true}
  ]
}

// board = makeBoard()
// function makeBoard (){
//   var boardSize = 5
//   for(i = 0; i < boardSize; i ++){//col
//     board.cells[i] = {}
//     board.cells[i]['col'] = i
//     //console.log(board.cells[i])
//     var y = 0
//     for(y = 0; y < boardSize; y ++){
//       board.cells[i]['row'] = y
//       console.log(board.cells[y])
//     }
//   }
//   return board
// }


function startGame () {
  document.addEventListener("click", checkForWin )
  document.addEventListener("contextmenu", checkForWin )
  // Don't remove this function call: it makes the game work!
  for(var i = 0; i < board.cells.length; i ++){
    surroundingMines = countSurroundingMines(board.cells[i])
    board.cells[i].surroundingMines = surroundingMines
  }
  lib.initBoard()
}
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var win = 0
  for(var i = 0; i < board.cells.length; i ++){
    if(board.cells[i].isMine == true && board.cells[i].isMarked == true){
      win = win + 1
    } 
    else if (!board.cells[i].isMine && !board.cells[i].hidden){
      win = win + 1
    }
    
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  if(win == board.cells.length){
   lib.displayMessage('You win!')
  }
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
  var count = 0
  var surrounding = lib.getSurroundingCells(cell['row'], cell['col'])
  for(var i = 0; i < surrounding.length; i++){
    if(surrounding[i].isMine == true){
      count = count + 1
    }
  }
  return count
}

