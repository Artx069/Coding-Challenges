"use strict";
/*
Given a balanced string with brackets like: "AA(XX((YY))(U))" find the substrings that are enclosed in the greatest depth.
Example:
String:  A   A   (   X   X   (   (   Y   Y   )   )   (   U   )   )
Level:        1        2  3       3  2  2    2  1

Therefore, answer: { "YY" } since the substring "YY" is locked at the deepest level.
If several substring are at the deepest level, return them all in a list in order of appearance.

The string includes only uppercase letters, parenthesis '(' and ')'.
If the input is empty or doesn't contain brackets, an array containing only the original string must be returned.
*/
function stringsInMaxDepth(s) {
  if (s.indexOf("(") == -1) {
    return [s];
  }
  let level = 0;
  let highestLevel = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      level++;
    } else if (s.charAt(i) == ")") {
      level--;
    }
    if (level >= highestLevel && s.charAt(i) == "(") {
      highestLevel = level;
      if (!map.has(level)) {
        map.set(level, [i]);
      } else {
        let arr = map.get(level);
        arr.push(i);
        map.set(level, arr);
      }
    }
  }
  let solution = [];

  for (let index of map.get(highestLevel)) {
    let substring = s.substring(index);
    solution.push(substring.substring(1, substring.indexOf(")")));
  }
  return solution;
}
