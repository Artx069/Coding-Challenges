"use strict";
/*
Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example
For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be true;

For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be false.

Input/Output
[input] 2D integer array shoes
Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

[output] a boolean value

true if it is possible to pair the shoes, false otherwise.
*/
function pairOfShoes(shoes) {
  let left = [];
  let right = [];

  shoes.forEach((x) => (x[0] == 0 ? left.push(x[1]) : right.push(x[1])));
  left = left.sort((a, b) => a - b);
  right = right.sort((a, b) => a - b);

  while (left.length > 0 || right.length > 0) {
    if (left[0] == right[0]) {
      left.shift();
      right.shift();
    } else {
      return false;
    }
  }

  return true;
}
