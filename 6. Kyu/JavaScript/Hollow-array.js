"use strict";
/*
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.


*/
function isHollow(x) {
  if (x.filter((x) => x != 0).length > 0) {
    let nonNull = x.filter((x) => x != 0)[0];
    if (x.indexOf(nonNull) > x.indexOf(0)) {
      return false;
    }
  }
  if (
    x.filter((x) => x != 0).length == 0 &&
    x.filter((x) => x == 0).length >= 3
  ) {
    return true;
  } else if (x.filter((x) => x == 0).length < 3) {
    return false;
  }
  let firstPart = x.slice(0, x.indexOf(0));
  let secPart = x.slice(x.lastIndexOf(0) + 1, x.length);
  let zeros = x.slice(x.indexOf(0), x.lastIndexOf(0) + 1);
  return (
    zeros.filter((x) => x != 0).length <= 0 &&
    firstPart.indexOf(0) == -1 &&
    secPart.indexOf(0) == -1 &&
    firstPart.length == secPart.length &&
    zeros.length > 2
  );
}
