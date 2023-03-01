"use strict";
/*
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Exercice
Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
"1"               ->  "2"
"1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
"9.9"             ->  "10.0"
Rules
All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in sequence.

You can assume all tests inputs to be valid.
*/
function nextVersion(version) {
  let countDots = version.replace(/[^\.]/g, "").length;
  let sNum = BigInt(version.replace(/\./g, ""));
  let incremented = sNum + 1n;
  let incrementedStr = incremented.toString();
  for (let i = incrementedStr.length - 1; i >= 0; i--) {
    if (countDots > 0) {
      countDots--;
      incrementedStr =
        incrementedStr.substring(0, i) + "." + incrementedStr.substring(i);
    }
  }
  return incrementedStr.charAt(0) == "."
    ? "0" + incrementedStr
    : incrementedStr;
}
