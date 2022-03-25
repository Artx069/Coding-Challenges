"use strict";
/*
There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions


A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.
*/
function doneOrNot(board) {
  let verticals = [];
  let test = "123456789";

  let regions = [[], [], [], [], [], [], [], [], []];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i < 3 && j < 3) {
        regions[0].push(board[i][j]);
      } else if (i < 3 && j < 6) {
        regions[1].push(board[i][j]);
      } else if (i < 3 && j < 9) {
        regions[2].push(board[i][j]);
      } else if (i < 6 && j < 3) {
        regions[3].push(board[i][j]);
      } else if (i < 6 && j < 6) {
        regions[4].push(board[i][j]);
      } else if (i < 6 && j < 9) {
        regions[5].push(board[i][j]);
      } else if (i < 9 && j < 3) {
        regions[6].push(board[i][j]);
      } else if (i < 9 && j < 6) {
        regions[7].push(board[i][j]);
      } else if (i < 9 && j < 9) {
        regions[8].push(board[i][j]);
      }
    }
  }

  for (let i = 0; i < regions.length; i++) {
    if ([...regions[i]].sort((a, b) => a - b).join("") !== test) {
      return "Try again!";
    }
  }

  for (let i = 0; i < board.length; i++) {
    if ([...board[i]].sort((a, b) => a - b).join("") !== test) {
      return "Try again!";
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    let line = [];
    for (let j = 0; j < board.length; j++) {
      line.push(board[j][i]);
    }
    if ([...line].sort((a, b) => a - b).join("") !== test) {
      return "Try again!";
    }
  }
  return "Finished!";
}
