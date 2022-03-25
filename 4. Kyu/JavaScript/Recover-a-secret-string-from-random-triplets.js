"use strict";
/*
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/
var recoverSecret = function (triplets) {
  let mapBefore = new Map();
  for (let i = 0; i < triplets.length; i++) {
    for (let j = 0; j < triplets[i].length; j++) {
      mapBefore.set(triplets[i][j], new Set());
    }
  }

  for (let i = 0; i < triplets.length; i++) {
    for (let j = 0; j < triplets[i].length; j++) {
      if (j == 1) {
        mapBefore.get(triplets[i][j]).add(triplets[i][j - 1]);
      }
      if (j == 2) {
        mapBefore.get(triplets[i][j]).add(triplets[i][j - 1]);
        mapBefore.get(triplets[i][j]).add(triplets[i][j - 2]);
      }
    }
  }
  let str = "";
  while (mapBefore.size > 0) {
    for (let key of mapBefore.keys()) {
      if (mapBefore.get(key).size == 0) {
        str += key;
        for (let entry of mapBefore.values()) {
          entry.delete(key);
        }
        mapBefore.delete(key);
      }
    }
  }
  return str;
};
