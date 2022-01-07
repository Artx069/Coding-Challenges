"use strict";
/*
The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

Example
For a = 25, b= 87, the result should be 4

25: 00011001
87: 01010111
The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

Input/Output
[input] integer a
First Number. 1 <= a <= 2^20

[input] integer b
Second Number. 1 <= b <= 2^20

[output] an integer
Hamming Distance
*/
function hammingDistance(a, b) {
  let length =
    a.toString(2).length > b.toString(2).length
      ? a.toString(2).length
      : b.toString(2).length;

  return a
    .toString(2)
    .padStart(length, 0)
    .split("")
    .filter((a, i, arr) => a != b.toString(2).padStart(length, 0).split("")[i])
    .length;
}
