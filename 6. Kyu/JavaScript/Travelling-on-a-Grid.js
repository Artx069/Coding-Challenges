"use strict";
/*
You have an 8x8 grid with coordinates ranging from 1 to 8. The origin (1, 1) is in the top left corner. The bottom right corner is (8, 8).

You are given a string as an input which will contain the 2 coordinates in this format: "(x1 y1)(x2 y2)", where (x1 y1) represents point A and (x2 y2) represents point B. In the inputs provided, point A will always be up and to the left of point B. In other words, x1 < x2 and y1 < y2 will be true for every input.

Your goal is to find out the number of different paths you can take to get from point A to point B by moving one cell at a time either down or right.

Example
Given an input of "(2 3)(3 5)", the number of possible paths to get from A to B is 3.

 .  .  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  A  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  .  B  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
 .  .  .  .  .  .  .  .
Possible paths, marked with x:

A .       A .       A x
x .       x x       . x
x B       . B       . B
*/
function travelChessboard(s) {
  let coordinatesFirst = s
    .replace(/(\([0-9] [0-9]\)).*/, "$1")
    .replace(/[\(\)]/g, "")
    .split(" ")
    .map((x) => parseInt(x));

  let coordinatesSec = s
    .replace(/.*(\([0-9] [0-9]\))/, "$1")
    .replace(/[\(\)]/g, "")
    .split(" ")
    .map((x) => parseInt(x));

  let n =
    coordinatesSec[1] -
    coordinatesFirst[1] +
    (coordinatesSec[0] - coordinatesFirst[0]);
  let m = coordinatesSec[1] - coordinatesFirst[1];

  return cCalc(n, m);
}

function cCalc(n, m) {
  return factorialize(n) / (factorialize(m) * factorialize(n - m));
}

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
