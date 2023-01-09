"use strict";
/*
Given a string s and a character c, return an array of integers representing the shortest distance from the current character in s to c.

Notes
All letters will be lowercase.
If the string is empty, return an empty array.
If the character is not present, return an empty array.
Examples
s = "lovecodewars"
c = "e"
result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

s = "aaaabbbb"
c = "b"
result = [4, 3, 2, 1, 0, 0, 0, 0]

s = ""
c = "b"
result = []

s = "abcde"
c = ""
result = []
*/
function shortesttoChar(s, c) {
  let sol = [];

  for (let i = 0; i < s.length; i++) {
    let smallest;
    for (let j = i; j < s.length; j++) {
      if (s.charAt(j) == c) {
        smallest = j - i;
        break;
      }
    }

    for (let j = i; j >= 0; j--) {
      if (s.charAt(j) == c) {
        smallest = i - j < smallest || smallest == undefined ? i - j : smallest;
        break;
      }
    }
    if (smallest != undefined) {
      sol.push(smallest);
    }
  }
  return sol;
}
