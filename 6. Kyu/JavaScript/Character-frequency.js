"use strict";
/*
Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:

  letterFrequency('aaAabb dddDD hhcc')
will return

  [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
Letter frequency analysis is often used to analyse simple substitution cipher texts like those created by the Caesar cipher.
*/
function letterFrequency(text) {
  text = text.toLowerCase();
  text = text.replace(/[^a-zA-Z]+/g, "");
  let alphabetic;
  let charsInText = new Map();
  let sol = [];

  for (let char of text) {
    if (!charsInText.has(char)) {
      charsInText.set(char, 1);
    } else {
      charsInText.set(char, charsInText.get(char) + 1);
    }
  }

  var mapAsc = new Map([...charsInText].sort((a, b) => a[1] - b[1]));

  for (let entry of mapAsc.keys()) {
    sol.push([entry, mapAsc.get(entry)]);
  }
  sol = sol.reverse();

  for (let i = 0; i < sol.length; i++) {
    for (let j = 0; j < sol.length; j++) {
      if (sol[i][1] == sol[j][1]) {
        if (sol[i][0] < sol[j][0]) {
          const temp = sol[i][0];
          sol[i][0] = sol[j][0];
          sol[j][0] = temp;
        }
      }
    }
  }

  return sol;
}
