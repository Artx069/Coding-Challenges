"use strict";
/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.

*/
function isIntArray(arr) {
  return arr == null ||
    typeof arr != "object" ||
    arr.filter((x) => typeof x != "number").length > 0
    ? false
    : arr.map((x) => x.toString()).filter((x) => !x.match(/^[-0-9]+$/))
        .length == 0;
}
