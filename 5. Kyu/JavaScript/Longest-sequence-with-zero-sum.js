"use strict";
/*
Write a method which takes an array of integers (positive and negative) and returns the longest contiguous sequence in this array, which total sum of elements equal 0.

For example:
maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])

Should return [92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.
*/
var maxZeroSequence = function (arr) {
  let sol = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (
        arr.slice(i, j).length != 0 &&
        arr.slice(i, j).reduce((a, b) => a + b) === 0 &&
        arr.slice(i, j).length >= sol.length
      ) {
        sol = arr.slice(i, j);
      }
    }
  }
  return sol;
};
