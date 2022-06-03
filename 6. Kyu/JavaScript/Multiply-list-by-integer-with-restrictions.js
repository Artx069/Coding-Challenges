"use strict";
/*
Given a list of integers l, return the list with each value multiplied by integer n.

Restrictions:
The code must not:

1. ontain *.
2. use eval() or exec()
3. contain for
4. modify l
*/
function multiply(n, l) {
  const copyL = [...l];
  const sol = [];
  while (copyL.length != 0) {
    let iterations = Math.abs(n);
    let element = copyL.shift();
    let num = 0;
    while (iterations != 0) {
      if (n > 0) {
        num += element;
      } else if (n < 0) {
        num -= element;
      }

      iterations--;
    }
    sol.push(num == 0 && n < 0 ? -0 : num); // test expected negative zero (-0)
  }
  return sol;
}
