import { checkIfNoMovesLeft } from "./board-printer.js";

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false

    X | X | X
    - | -| - 
    - | - | -

    [
        ['X', 'X', 'X'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ]
*/
function checkRow(board, player, rowNumber) {
  let index = rowNumber - 1;
  let row = board[index];
  if (row[0] === player && row[1] === player && row[2] === player) {
    return true;
  } else {
    return false;
  }
}

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a column index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the column
    Otherwise, return false

        - | - | X
        - | -| X 
        - | - | X

    [
        ['_', '_', 'X'],
        ['_', '_', 'X'],
        ['_', '_', 'X']
    ]
*/

function checkColumn(board, player, columnNumber) {
  let index = columnNumber - 1;
  if (
    board[0][index] === player &&
    board[1][index] === player &&
    board[2][index] === player
  ) {
    return true;
  } else {
    return false;
  }
}

/*
    Given 2 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
    Return true if the player has made a move in 3 diagonal squares
    Otherwise, return false

    - | - | X
    - | X | - 
    X | - | -

    [
        ['_', '_', 'X'],
        ['_', 'X', '_'],
        ['X', '_', '_']
    ]
*/
function checkDiagonal(board, player) {
  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  } else {
    return false;
  }
  // It may be easier to use an if statement than a loop here
}
// Is it right to use index for all these functions if value for input for row and number should be between 1 and 3 include
/*
    There is no need to change any code below this line.
*/

function checkIfPlayerWon(board, player) {
  for (let i = 0; i <= 2; i++) {
    if (checkRow(board, player, i) || checkColumn(board, player, i)) {
      return true;
    }
  }

  if (checkDiagonal(board, player)) {
    return true;
  }

  return false;
}

export function isGameOver(board) {
  if (checkIfPlayerWon(board, "X")) {
    console.log("X has won the game!\n");
    return true;
  }

  if (checkIfPlayerWon(board, "O")) {
    console.log("O has won the game!\n");
    return true;
  }

  if (checkIfNoMovesLeft(board)) {
    console.log("Game Over - Its a tie!\n");
    return true;
  }

  return false;
}
