"use strict";
/*
This is the second part of the kata :3 🎈🎆🎇🎆🎈
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
Now there are one of 4 types of arrows ( '^', '>', 'v', '<' ) and only one target (x)
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[
[' ', 'x', ' ', ' '],
[' ', ' ', ' ', ' '], --> return true
[' ', '^', ' ', ' '],
[' ', ' ', ' ', ' ']
]
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', 'v', ' ', ' '], --> return false
[' ', ' ', ' ', 'x'],
[' ', ' ', ' ', ' ']
]
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
['>', ' ', ' ', 'x'], --> return true
[' ', '', ' ', ' '],
[' ', ' ', ' ', ' ']
]
*/
const solution = (mtrx) => {
  let arrow = [];
  let ex = [];
  let arrowSign = "";

  for (let i = 0; i < mtrx.length; i++) {
    if (
      mtrx[i].indexOf("v") != -1 ||
      mtrx[i].indexOf("^") != -1 ||
      mtrx[i].indexOf("<") != -1 ||
      mtrx[i].indexOf(">") != -1
    ) {
      arrow = [
        i,
        mtrx[i].indexOf("^") != -1
          ? mtrx[i].indexOf("^")
          : mtrx[i].indexOf("v") != -1
          ? mtrx[i].indexOf("v")
          : mtrx[i].indexOf("<") != -1
          ? mtrx[i].indexOf("<")
          : mtrx[i].indexOf(">") != -1
          ? mtrx[i].indexOf(">")
          : "",
      ];
      arrowSign =
        mtrx[i][mtrx[i].indexOf("v")] ||
        mtrx[i][mtrx[i].indexOf("^")] ||
        mtrx[i][mtrx[i].indexOf("<")] ||
        mtrx[i][mtrx[i].indexOf(">")];
    }

    if (mtrx[i].indexOf("x") != -1) {
      ex = [i, mtrx[i].indexOf("x")];
    }
  }

  let bool = false;

  if (arrowSign == "v" && ex[1] == arrow[1] && ex[0] > arrow[0]) {
    bool = true;
  } else if (arrowSign == ">" && ex[0] == arrow[0] && ex[1] > arrow[1]) {
    bool = true;
  } else if (arrowSign == "<" && ex[0] == arrow[0] && ex[1] < arrow[1]) {
    bool = true;
  } else if (arrowSign == "^" && ex[1] == arrow[1] && ex[0] < arrow[0]) {
    bool = true;
  }
  return bool;
};
