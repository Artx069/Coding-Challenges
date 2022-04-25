"use strict";
/*
Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.

For instance, given the array:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
                  '------------^------------'
Your task is to complete the function that determines where to replace a zero with a one to make the maximum length subsequence.

Notes:

If there are multiple results, return the last one:
[1, 1, 0, 1, 1, 0, 1, 1] ==> 5

The array will always contain only zeros and ones.
*/
function replaceZero(arr) {
  let highest = 0;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      let copy = [...arr];
      copy[i] = 1;

      let copyHighest = Math.max(
        ...copy
          .toString()
          .replace(/\,/g, "")
          .split("0")
          .map((x) => x.length)
      );
      if (copyHighest >= highest) {
        highest = copyHighest;
        index = i;
      }
    }
  }
  return index;
}
