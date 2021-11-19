"use strict";
/*
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""
*/
function formatWords(words) {
  if (words == null) {
    return "";
  }

  let words2 = [];
  for (let word of words) {
    if (word !== "") {
      words2.push(word);
    }
  }
  if (words2.length == 0) {
    return "";
  }
  let last = words2.pop();
  let sol = "";

  if (words2.length >= 2) {
    sol = words2.join(", ");
    sol = sol.substring(0, sol.length) + " and " + last;
  } else if (words2.length == 1) {
    sol = words[0] + " and " + last;
  } else if (words2.length == 0) {
    sol = last;
  }
  return sol;
}
