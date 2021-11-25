"use strict";
/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/
function solution(input) {
  let romans = new Map();
  let arabs = new Map();
  let sol = 0;
  // [ 900, 400, 90, 40, 9, 4, 1000, 500, 100, 50, 10, 5, 1]
  arabs.set("CM", 900);
  arabs.set("CD", 400);
  arabs.set("XC", 90);
  arabs.set("XL", 40);
  arabs.set("IX", 9);
  arabs.set("IV", 4);
  arabs.set("M", 1000);
  arabs.set("D", 500);
  arabs.set("C", 100);
  arabs.set("L", 50);
  arabs.set("X", 10);
  arabs.set("V", 5);
  arabs.set("I", 1);
  let occurances = [];
  // ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  romans.set("CM", 0);
  romans.set("CD", 0);
  romans.set("XC", 0);
  romans.set("XL", 0);
  romans.set("IX", 0);
  romans.set("IV", 0);
  romans.set("M", 0);
  romans.set("D", 0);
  romans.set("C", 0);
  romans.set("L", 0);
  romans.set("X", 0);
  romans.set("V", 0);
  romans.set("I", 0);

  for (let entry of romans.keys()) {
    while (input.indexOf(entry) != -1) {
      romans.set(entry, romans.get(entry) + 1);
      input = input.replace(entry, "");
    }
  }
  for (let entry of arabs.keys()) {
    sol += romans.get(entry) * arabs.get(entry);
  }

  return sol;
}
