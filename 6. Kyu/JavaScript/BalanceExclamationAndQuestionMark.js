"use strict";
/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/
function balance(left, right) {
  left = left
    .replace(/\!/g, 2)
    .replace(/\?/g, 3)
    .split("")
    .map((a) => parseInt(a))
    .reduce((a, b) => a + b);
  right = right
    .replace(/\!/g, 2)
    .replace(/\?/g, 3)
    .split("")
    .map((a) => parseInt(a))
    .reduce((a, b) => a + b);

  return left == right ? "Balance" : left > right ? "Left" : "Right";
}
