"use strict";
/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/
function isSolved(board) {
  for (let player = 1; player <= 2; player++) {
    let horizontalFirstRow =
      board[0][0] == player && board[0][1] == player && board[0][2] == player;
    let horizontalSecRow =
      board[1][0] == player && board[1][1] == player && board[1][2] == player;
    let horizontalThirdRow =
      board[2][0] == player && board[2][1] == player && board[2][2] == player;

    let verticalFirstRow =
      board[0][0] == player && board[1][0] == player && board[2][0] == player;
    let verticalSecondRow =
      board[0][1] == player && board[1][1] == player && board[2][1] == player;
    let verticalThirdRow =
      board[0][2] == player && board[1][2] == player && board[2][2] == player;

    let crossUpDown =
      board[0][0] == player && board[1][1] == player && board[2][2] == player;
    let crossDownUp =
      board[2][0] == player && board[1][1] == player && board[0][2] == player;

    if (
      horizontalFirstRow ||
      horizontalSecRow ||
      horizontalThirdRow ||
      verticalFirstRow ||
      verticalSecondRow ||
      verticalThirdRow ||
      crossUpDown ||
      crossDownUp
    ) {
      return player;
    }
  }
  if (
    board[0].indexOf(0) != -1 ||
    board[1].indexOf(0) != -1 ||
    board[2].indexOf(0) != -1
  ) {
    return -1;
  }
  return 0;
}
