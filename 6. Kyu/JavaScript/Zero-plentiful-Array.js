"use strict";
/*
An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.
*/
function zeroPlentiful(arr) {
  if (arr.filter((a) => a != 0).length > 0) {
    if (
      arr
        .join("")
        .split(/[1-9\-]/)
        .filter((a) => a != "" && a.length < 4).length > 0
    ) {
      return 0;
    } else {
      return arr
        .join("")
        .split(/[1-9\-]/)
        .filter((a) => a != "").length;
    }
  } else {
    if (arr.length >= 4) {
      return 1;
    } else {
      return 0;
    }
  }
}
