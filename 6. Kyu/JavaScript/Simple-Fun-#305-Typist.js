"use strict";
/*
John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.

Given a string s. Your task is to count how many times the keyboard has been tapped by John.

You can assume that, at the beginning the Caps Lock light is not lit.

Input/Output
[input] string s

A non-empty string. It contains only English letters(uppercase or lowercase).

1 ≤ s.length ≤ 10000

[output] an integer

The number of times John tapped the keyboard.

Example
For s = "a", the output should be 1.

John hit button a.

For s = "aa", the output should be 2.

John hit button a, a.

For s = "A", the output should be 2.

John hit button Caps Lock, A.

For s = "Aa", the output should be 4.

John hit button Caps Lock, A, Caps Lock, a.
*/
function typist(s) {
  let now = "";
  let before = "";
  let count = 0;
  let currentCase = "";
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      currentCase =
        s.charAt(i) === s.charAt(i).toLowerCase() ? "lowercase" : "uppercase";
      currentCase === "uppercase" ? (count += 2) : count++;
      before = currentCase;
    } else {
      currentCase =
        s.charAt(i) === s.charAt(i).toLowerCase() ? "lowercase" : "uppercase";
      currentCase === before ? count++ : (count += 2);
      before = currentCase;
    }
  }
  return count;
}
