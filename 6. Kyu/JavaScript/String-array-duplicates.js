"use strict";
/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/
function dup(arr) {
  for (let i = 0; i < arr.length; i++) {
    let tempStr = [];
    for (let j = arr[i].length - 1; j >= 0; j--) {
      if (arr[i][j] == arr[i][j - 1]) {
        continue;
      } else {
        tempStr.push(arr[i][j]);
      }
    }
    arr[i] = tempStr.reverse().join("");
  }
  return arr;
}
