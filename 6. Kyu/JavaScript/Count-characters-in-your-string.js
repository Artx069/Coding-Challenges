"use strict";
/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
  if (string.length < 1) {
    return {};
  }
  let symbs = [];
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (symbs.indexOf(char) == -1) {
      symbs.push(char);
      obj[char] = 0;
    }
  }

  for (let i = 0; i < symbs.length; i++) {
    const charAtI = symbs[i];
    for (let j = 0; j < string.length; j++) {
      const charAtJ = string.charAt(j);

      if (charAtI == charAtJ) {
        obj[charAtI]++;
      }
    }
  }

  return obj;
}
