"use strict";
/*
Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/
function sortString(string, ordering) {
  let commonChars = [];
  let notCommonChars = [];
  let solString = "";

  for (let char of string) {
    if (ordering.indexOf(char) !== -1) {
      commonChars.push(char);
    } else {
      notCommonChars.push(char);
    }
  }

  for (let char of ordering) {
    while (commonChars.indexOf(char) !== -1) {
      solString += char;
      commonChars.splice(commonChars.indexOf(char), 1);
    }
  }

  solString = solString + notCommonChars.join("");
  return solString;
}
