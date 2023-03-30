"use strict";
/*
Given a positive integer as input, return the output as a string in the following format:

Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.

Examples
Input	Output
0	""
56	"5*10+6"
60	"6*10"
999	"9*100+9*10+9"
10004	"1*10000+4"
Note: input >= 0
*/
function simplify(n) {
  let rev = n.toString().split("").reverse().join("");
  let sol = [];
  for (let i = 0; i < rev.length; i++) {
    sol.push([rev.charAt(i), i == 0 ? "" : "*1" + "0".repeat(i)]);
  }
  return sol
    .reverse()
    .map((x) => (x[0] == "0" ? "" : x.join("")))
    .filter((x) => x != "")
    .join("+");
}
