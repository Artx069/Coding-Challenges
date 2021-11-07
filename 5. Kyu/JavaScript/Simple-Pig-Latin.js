"use strict";
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str) {
  let sol = [];
  for (let word of str.split(" ")) {
    if (word.match(/[a-zA-Z]/g)) {
      let firstChar = word.substring(0, 1);
      let rest = word.substring(1, word.length);
      sol.push(rest + firstChar + "ay");
    } else {
      sol.push(word);
    }
  }
  return sol.join(" ");
}
