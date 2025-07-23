/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
        */
export function validateMove(move, board) {
  const parts = move.split(",");

  if (parts.length !== 2) {
    console.log("Try again... (Use format: row,col)");
    return false;
  }

  const row = parseInt(parts[0], 10) - 1;
  const col = parseInt(parts[1], 10) - 1;

  if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2) {
    console.log("Try again... (Move out of bounds)");
    return false;
  }

  if (board[row][col] !== "_") {
    console.log("Try again... (Space is taken)");
    return false;
  }

  return true;
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/

export function makeMove(board, move, player) {
  if (!validateMove(move, board)) {
    return false;
  }

  const [rowStr, colStr] = move.split(",");
  const row = parseInt(rowStr, 10) - 1;
  const col = parseInt(colStr, 10) - 1;

  board[row][col] = player;
  return true;
}

function play(board, move, player) {
  makeMove(board, move, player);
}
