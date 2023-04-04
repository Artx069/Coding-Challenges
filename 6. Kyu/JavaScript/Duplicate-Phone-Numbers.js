"use strict";
/*
Businesses like to have memorable telephone numbers. One way to make a telephone number memorable is to have it spell a memorable word or phrase.

For example, you can call the University of Waterloo by dialing the memorable TUT-GLOP. Sometimes only part of the number is used to spell a word. When you get back to your hotel tonight you can order a pizza from Gino's by dialing 310-GINO.

The standard form of a telephone number is seven decimal digits with a hyphen between the third and fourth digits (e.g. 888-1200). The keypad of a phone supplies the mapping of letters to numbers, as follows:

A, B, and C map to 2
D, E, and F map to 3
G, H, and I map to 4
J, K, and L map to 5
M, N, and O map to 6
P, R, and S map to 7
T, U, and V map to 8
W, X, and Y map to 9
letters can be uppercase or lowercase
There is no mapping for Q(q) or Z(z). Hyphens are not dialed, and can be added and removed as necessary. The standard form of TUT-GLOP is 888-4567, the standard form of 310-GINO is 310-4466, and the standard form of 3-10-10-10 is 310-1010.

Two telephone numbers are equivalent if they have the same standard form. (They dial the same number.)

Given a list phoneNumbers, your task is to find the duplicate telephone number in the list. Return an array like this:

["310-1010:2","487-3279:4","888-4567:3"]

The form of each element is standard form + : + numbers of duplicate

Input/Output
[input] string array phoneNumbers
The list of the telephone numbers. Each telephone number consists of a string composed of decimal digits, letters (excluding Q and Z) and hyphens. Exactly seven of the characters in the string will be digits or letters.

[output] a string array
The duplicate telephone number list. Arrange the output string by telephone number in ascending lexicographical order. If there are no duplicates in the input return [].

#Example
For phoneNumbers =

[
"7399425",
"SEXY-GAL",
"Sexy-GAL",
"sexy-gal",
"SEXY-425",
"S-E-X-Y-G-A-L"
]
The output should be:

["739-9425:6"]
*/
var mapper = {
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PRS: 7,
  TUV: 8,
  WXY: 9,
  QZ: "",
};
function findDuplicatePhoneNumbers(numbers) {
  numbers = numbers
    .map((x) =>
      x
        .replace(/[^a-zA-Z0-9]/g, "")
        .toUpperCase()
        .split("")
        .map((y) =>
          y.match(/[0-9]/)
            ? y
            : mapper[Object.keys(mapper).filter((z) => z.indexOf(y) != -1)]
        )
        .join("")
    )
    .map((x) => x.substring(0, 3) + "-" + x.substring(3));

  const occurrences = numbers.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  return Object.entries(occurrences)
    .filter((x) => x[1] > 1)
    .map((x) => x[0] + ":" + x[1])
    .sort((a, b) => a.localeCompare(b));
}
