"use strict";
/*
We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12
*/
function doubleton(num) {
  let a = function () {
    for (let i = num + 1; i < 1000000; i++) {
      const sol = [];
      for (let number of i.toString()) {
        if (sol.indexOf(number) == -1) {
          sol.push(number);
        }
      }
      if (sol.length == 2) {
        return i;
      }
    }
  };
  return a();
}
