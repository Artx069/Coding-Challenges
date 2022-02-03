"use strict";
/*
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]
*/
function splitAndAdd(arr, n) {
  function splitAndAdd(arr) {
    let firstPart = arr.slice(0, arr.length / 2).reverse();
    let secPart = arr.slice(arr.length / 2, arr.length).reverse();

    arr = secPart.map((x, i, secPart) =>
      firstPart[i] == null ? x : (x = secPart[i] + firstPart[i])
    );

    return arr.reverse();
  }

  for (let i = 0; i < n; i++) {
    arr = splitAndAdd(arr);
  }

  return arr;
}
