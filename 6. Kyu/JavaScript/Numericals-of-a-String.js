"use strict";
/*
You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.
*/
function numericals(s) {
  let map = new Map();
  let sol = "";
  for (let c of s) {
    map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
    sol += map.get(c);
  }
  return sol;
}
