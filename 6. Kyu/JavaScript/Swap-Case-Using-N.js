"use strict";
/*
Your job is to change the given string s using a non-negative integer n.

Each bit in n will specify whether or not to swap the case for each alphabetic character in s: if the bit is 1, swap the case; if its 0, leave it as is. When you finish with the last bit of n, start again with the first bit.

You should skip the checking of bits when a non-alphabetic character is encountered, but they should be preserved in their original positions.

Examples
swap("Hello world!", 11)  -->  "heLLO wORLd!"
...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

H e l l o   w o r l d !
1 0 1 1 1 x 0 1 1 1 0 x
^   ^ ^ ^    ^ ^ ^
More examples
swap("gOOd MOrniNg", 7864)        -->  "GooD MorNIng"
swap("", 11345)                   -->  ""
swap("the lord of the rings", 0)  -->  "the lord of the rings"
*/
function swap(s, n) {
  let nBin = n.toString(2);
  let counter = 0;
  let solution = "";
  for (let c of s) {
    let currentC = nBin.charAt(counter);
    if (!c.match(/[a-zA-Z]/)) {
      solution += c;
      continue;
    }
    if (currentC == "1") {
      if (c == c.toUpperCase()) {
        solution += c.toLowerCase();
      } else {
        solution += c.toUpperCase();
      }
    } else {
      solution += c;
    }
    counter++;
    if (counter >= nBin.length) {
      counter = 0;
    }
  }
  return solution;
}