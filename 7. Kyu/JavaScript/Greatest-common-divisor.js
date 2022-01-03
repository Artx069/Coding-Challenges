"use strict";
/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/
function mygcd(x, y) {
  let smaller = 0;

  let func = (x, y) => {
    x > y ? (smaller = y) : (smaller = x);
  };
  func(x, y);

  while (x % smaller != 0 || y % smaller != 0) {
    smaller--;
  }
  return smaller;
}
