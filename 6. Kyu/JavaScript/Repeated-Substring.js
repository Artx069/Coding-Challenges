"use strict";
/**
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde";
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.
*/
function f(s) {
  let substring = [];
  let counter = 0;

  for (let i = s.length; i >= 1; i--) {
    let sCopy = s;
    let subStr = s.substring(0, i);
    let reg = new RegExp("" + subStr + "$");
    while (sCopy.match(reg)) {
      counter++;
      sCopy = sCopy.replace(reg, "");
    }
    substring.push([subStr, counter]);
    counter = 0;
  }

  let highestTouple = [0, 0];

  for (let e of substring) {
    if (e[1] > highestTouple[1]) {
      highestTouple = e;
    }
  }
  return highestTouple;
}
