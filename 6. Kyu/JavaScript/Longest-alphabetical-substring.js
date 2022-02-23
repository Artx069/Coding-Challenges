"use strict";
/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.
*/
function longest(text) {
  let substring = "";
  for (let i = 1; i < text.length; i++) {
    if (text.charAt(i) < text.charAt(i - 1)) {
      let temp = text.slice(0, i);
      temp.length > substring.length ? (substring = temp) : "";
      text = text.slice(i);
      i = 0;
    }
  }
  return substring.length >= text.length ? substring : text;
}
