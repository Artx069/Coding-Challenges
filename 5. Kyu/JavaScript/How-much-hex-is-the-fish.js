"use strict";
/*
The ocean is full of colorful fishes. We as programmers want to know the hexadecimal value of these fishes.

Task
Take all hexadecimal valid characters (a,b,c,d,e,f) of the given name and XOR them. Return the result as an integer.

Input
The input is always a string, which can contain spaces, upper and lower case letters but no digits.

Example
fisHex("redlionfish") -> e,d,f -> XOR -> 12
*/
function fisHex(name1) {
  if (name1.replace(/[^a-fA-F]+/g, "").length == 0) {
    return 0;
  }

  let hex = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
  let arr = name1
    .toLowerCase()
    .replace(/[^a-f]+/g, "")
    .split("")
    .map((x) => hex[x].toString(2));

  while (arr.length > 1) {
    let first = arr.shift();
    let sec = arr.shift();
    let final = "";
    for (let i = 0; i < first.length; i++) {
      if (
        (first.charAt(i) == "1" || sec.charAt(i) == "1") &&
        !(first.charAt(i) == "1" && sec.charAt(i) == "1")
      ) {
        final += "1";
      } else {
        final += "0";
      }
    }
    arr.unshift(final);
  }
  return parseInt(arr[0], 2);
}
