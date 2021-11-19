"use strict";
/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000) // should return 'M'
RomanNumerals.fromRoman("M") // should return 1000
*/
class RomanNumerals {
  static toRoman(input) {
    let romans = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let arabs = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let occurances = [];
    let romanOutput = "";

    for (let i = 0; i < romans.length; i++) {
      if (input >= 900 && input <= 999) {
        input -= 900;
        if (occurances[1] != null) {
          occurances[1] += 1;
        } else {
          occurances[1] = 1;
        }

        i = 3;
      }
      if (input >= 400 && input <= 499) {
        input -= 400;
        if (occurances[3] != null) {
          occurances[3] += 1;
        } else {
          occurances[3] = 1;
        }
        i = 4;
      }
      if (input >= 90 && input <= 99) {
        input -= 90;
        if (occurances[5] != null) {
          occurances[5] += 1;
        } else {
          occurances[5] = 1;
        }
        i = 6;
      }
      if (input >= 40 && input <= 49) {
        input -= 40;
        if (occurances[7] != null) {
          occurances[7] += 1;
        } else {
          occurances[7] = 1;
        }
        i = 8;
      }
      if (input == 9) {
        input -= 9;
        if (occurances[9] != null) {
          occurances[9] += 1;
        } else {
          occurances[9] = 1;
        }
        i = 10;
      }
      if (input == 4) {
        input -= 4;
        if (occurances[11] != null) {
          occurances[11] += 1;
        } else {
          occurances[11] = 1;
        }
        i = 12;
      }
      occurances[i] = Math.floor(input / arabs[i]);
      input = input - occurances[i] * arabs[i];
    }

    for (let i = 0; i < occurances.length; i++) {
      for (let j = 0; j < occurances[i]; j++) {
        romanOutput += romans[i];
      }
    }

    return romanOutput;
  }

  static fromRoman(input) {
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
}
