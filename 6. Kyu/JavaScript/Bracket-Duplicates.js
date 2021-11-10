"use strict";
/*
Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
*/
function stringParse(s) {
  if (typeof s != "string") {
    return "Please enter a valid string";
  }
  s = s.split("");
  let parts = [];
  let temp = s[0];

  for (let i = 1; i <= s.length; i++) {
    if (!(temp == s[i])) {
      parts.push(s.splice(0, i));
      temp = s[0];
      i = 0;
    }
  }
  let sol = "";
  for (let e of parts) {
    if (e.length > 2) {
      sol += e[0].repeat(2) + "[" + e[0].repeat(e.length - 2) + "]";
    } else {
      sol += e[0].repeat(e.length);
    }
  }
  sol += s;
  return sol;
}
