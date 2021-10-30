"use strict";
/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/
function insideOut(x) {
  if (x.match(/^\s+$/)) {
    return x;
  }
  let xSol = "";
  for (let word of x.split(" ")) {
    if (word.length % 2 == 0) {
      let firstHalf = word
        .substring(0, word.length / 2)
        .split("")
        .reverse()
        .join("");
      let secondHalf = word
        .substring(word.length / 2, word.length)
        .split("")
        .reverse()
        .join("");
      xSol += firstHalf + secondHalf + " ";
      //console.log(firstHalf + " x " + secondHalf)
    } else {
      let firstHalf = word
        .substring(0, word.length / 2)
        .split("")
        .reverse()
        .join("");
      let secondHalf = word
        .substring(word.length / 2 + 1, word.length)
        .split("")
        .reverse()
        .join("");
      let mid = word.substr(word.length / 2, 1);
      xSol += firstHalf + mid + secondHalf + " ";
    }
  }
  return xSol.trim();
}
