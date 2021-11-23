"use strict";
/*
You are given a string s. Your task is to count the number of each letter (A-Z), and make a vertical histogram as result. Look at the following examples to understand the rules.

Example
For s = "XXY YY ZZZ123ZZZ AAA BB C", the output should be:

          *
          *
          *
*       * *
* *   * * *
* * * * * *
A B C X Y Z
Rules
You just need to count the uppercase letters. Any other character will be ignored.
Using * to represent the number of characters.
The order of output is form A to Z. Characters that do not appear in the string are ignored.
To beautify the histogram, there is a space between every pair of columns.
There are no extra spaces at the end of each row. Also, use "\n" to separate rows.
*/
function verticalHistogramOf(s) {
  s = s.replace(/[^A-Z]+/g, "");
  let map = new Map();
  let sol = [];
  let chars = [];
  for (let c of s) {
    map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
    chars.push(c);
  }
  chars = [...new Set(chars)]
    .sort((a, b) => a.localeCompare(b))
    .join(" ")
    .split("");
  let biggest = Math.max(...Array.from(map.values()));
  sol.push(chars);
  for (let i = 0; i < biggest; i++) {
    let temp = [];
    for (let j = 0; j < chars.length; j++) {
      if (map.get(chars[j]) > 0) {
        temp.push("*");
        map.set(chars[j], map.get(chars[j]) - 1);
      } else {
        temp.push(" ");
      }
    }

    sol.unshift(temp);
  }
  let solString = "";
  for (let a of sol) {
    solString += a.join("").trimRight() + "\n";
  }
  return solString.trimEnd();
}
