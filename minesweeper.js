document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells : [

  ]
}

function makeBoard (num){
  var cells = []
  var cellNum = 0
  for(y = 0; y < num; y ++){
    for(x = 0; x < num; x++){
      cells[cellNum] = {
        row: y,
        col: x,
        isMine: (Math.floor(Math.random() * 3) ) == 2,
        hidden: true
      }
      cellNum ++
    }
  }
  return cells
}

board.cells =  makeBoard(5)


function startGame () {
  document.addEventListener("click", checkForWin )
  document.addEventListener("contextmenu", checkForWin )

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

