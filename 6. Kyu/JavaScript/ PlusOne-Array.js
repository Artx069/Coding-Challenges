"use strict";
/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/
function upArray(arr) {
  if (arr.filter((x) => x < 0 || x > 9).length > 0 || arr.length == 0) {
    return null;
  } else {
    let temp = arr.join("");
    let end = "";

    for (let i = temp.length - 1; i >= 0; i--) {
      if (temp[i] == "9") {
        end += 9;
      } else {
        end = temp[i] + end;
        break;
      }
    }

    let newStr =
      temp.substring(0, temp.length - end.length) + (Number(end) + 1);
    return newStr.split("").map((x) => Number(x));
  }
}
