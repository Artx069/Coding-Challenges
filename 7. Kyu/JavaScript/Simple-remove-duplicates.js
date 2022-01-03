"use strict";
/*
In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
*/
function solve(arr) {
  let length = arr.length - 1;
  let sol = [];

  for (let i = length; i >= 0; i--) {
    if (sol.indexOf(arr[i]) == -1) {
      sol.push(arr[i]);
    }
  }

  sol = sol.reverse();
  return sol;
}
