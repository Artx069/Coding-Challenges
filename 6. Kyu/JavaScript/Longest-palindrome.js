"use strict";
/*
A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".
*/
function longestPalindrome(input) {
  let map = new Map();
  for (let char of input.toLowerCase()) {
    if (char.match(/[a-zA-Z0-9]/)) {
      if (!map.has(char)) {
        map.set(char, 1);
      } else {
        map.set(char, map.get(char) + 1);
      }
    }
  }
  let sortedMap = new Map(
    [...map].sort((a, b) => parseInt(b[1]) - parseInt(a[1]))
  );

  let maxLength = function () {
    let count = 0;
    for (let key of sortedMap.keys()) {
      if (sortedMap.get(key) == 1) {
        count++;
        break;
      } else {
        count +=
          sortedMap.get(key) % 2 == 0
            ? sortedMap.get(key)
            : sortedMap.get(key) - 1;
      }
    }
    return count;
  };
  return maxLength();
}
