"use strict";
/* 
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
*/
function stringTransformer(str) {
  let output = "";

  for (let char of str) {
    if (char.match(/[a-zA-Z]/)) {
      char == char.toLowerCase()
        ? (output += char.toUpperCase())
        : (output += char.toLowerCase());
    } else {
      output += char;
    }
  }
  return output.split(/\W/).reverse().join(" ");
}
