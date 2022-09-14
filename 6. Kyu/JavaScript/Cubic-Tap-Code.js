"use strict";
/*
This works similarly to Tap Code except instead of being mapped onto a 5x5 square, letters are mapped onto a 3x3x3 cube, left to right, top to bottom, front to back with space being the 27th "letter". Letters are represented by a series of taps (represented as dots .) and pauses (represented by spaces  ), for example A is represented as . . . (first column, first row, first layer) and   is represented as ... ... ... (third column, third row, third layer).

For reference the three layers of the cube are as follows (underscore represents space):

1  1  2  3 
1  A  B  C
2  D  E  F
3  G  H  I

2  1  2  3 
1  J  K  L
2  M  N  O
3  P  Q  R

3  1  2  3 
1  S  T  U
2  V  W  X
3  Y  Z  _
Your task (should you choose to accept it)
Create two functions encode() and decode(), to encode and decode strings to and from cubic tap code.

Input
encode() takes a string of uppercase letters and spaces and outputs a string of dots and spaces. decode() takes a string of dots and spaces and outputs a string of uppercase letters and spaces. All inputs will be valid.

Examples
encode("N") => ".. .. .."
encode("TEST") => ".. . ... .. .. . . . ... .. . ..."
encode("HELLO WORLD") => ".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. ."

decode(".. .. ..") => "N"
decode(".. . ... .. .. . . . ... .. . ...") => "TEST"
decode(".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. .") => "HELLO WORLD"
*/
const tapcode = {
  A: ". . .",
  B: ".. . .",
  C: "... . .",
  D: ". .. .",
  E: ".. .. .",
  F: "... .. .",
  G: ". ... .",
  H: ".. ... .",
  I: "... ... .",
  J: ". . ..",
  K: ".. . ..",
  L: "... . ..",
  M: ". .. ..",
  N: ".. .. ..",
  O: "... .. ..",
  P: ". ... ..",
  Q: ".. ... ..",
  R: "... ... ..",
  S: ". . ...",
  T: ".. . ...",
  U: "... . ...",
  V: ". .. ...",
  W: ".. .. ...",
  X: "... .. ...",
  Y: ". ... ...",
  Z: ".. ... ...",
  _: "... ... ...",
};

const tapCodeRev = Object.fromEntries(
  Object.entries(tapcode).map((a) => a.reverse())
);

function encode(str) {
  return str
    .replace(/[ ]/g, "_")
    .split("")
    .map((x) => tapcode[x])
    .join(" ");
}

function decode(str) {
  let splitted = [];
  if (str.split("").filter((x) => x == " ").length > 0) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == " ") {
        counter++;
        if (counter == 3) {
          splitted.push(str.substring(0, i));
          str = str.substring(i + 1);
          counter = 0;
          i = 0;
        }
      }
    }
  }
  splitted.push(str);

  return splitted
    .map((x) => tapCodeRev[x])
    .join("")
    .replace(/[_]/g, " ");
}
