"use strict";
/*
Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.


*/
function permuteAPalindrome(input) {
  let map = new Map();
  let splittedInput = input.split("");
  for (let c of splittedInput) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }
  let arr = [[], []];
  let currentArr = 0;
  const mapSort1 = new Map([
    ...[...map.entries()]
      .filter((x) => x[1] % 2 == 0)
      .sort((a, b) => b[1] - a[1]),
    ...[...map.entries()]
      .filter((x) => x[1] % 2 == 1)
      .sort((a, b) => b[1] - a[1]),
  ]);
  while (mapSort1.size != 0) {
    let key = [...mapSort1.keys()][0];
    arr[currentArr].push(key);
    mapSort1.set(key, mapSort1.get(key) - 1);
    if (mapSort1.get(key) == 0) {
      mapSort1.delete(key);
    }
    currentArr = Math.abs(currentArr - 1);
  }

  return arr[0].length == arr[1].length
    ? arr[0].join("") == arr[1].join("")
    : arr[0].slice(0, arr[0].length - 1).join("") == arr[1].join("");
}
