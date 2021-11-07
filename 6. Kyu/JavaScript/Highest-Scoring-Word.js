"use strict";
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let splitted = x.split(" ");
  let map = new Map();
  for (let word of splitted) {
    let score = 0;
    for (let char of word) {
      score += alphabet.indexOf(char) + 1;
    }
    map.set(word, score);
  }

  let bestScore = 0;
  let bestWord = "";

  for (let key of map.keys()) {
    if (map.get(key) > bestScore) {
      bestWord = key;
      bestScore = map.get(key);
    }
  }
  return bestWord;
}
