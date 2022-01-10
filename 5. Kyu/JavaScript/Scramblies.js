"use strict";
/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/
let map = new Map();

for (let s of str1) {
  map.has(s) ? map.set(s, map.get(s) + 1) : map.set(s, 1);
}

for (let s of str2) {
  if (map.has(s) && map.get(s) > 0) {
    map.set(s, map.get(s) - 1);
  } else {
    console.log(false);
  }
}
