"use strict";
/*
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/
var countDeafRats = function (str) {
  str = str.replace(/ /g, "");

  let indexPiper = str.indexOf("P");
  let leftPart = str.substr(0, indexPiper);
  let rightPart = str.substring(indexPiper + 1, str.length);
  let countDeafs = 0;

  for (let i = 0; i < leftPart.length; i += 2) {
    if (leftPart.substr(i, 2) == "O~") {
      countDeafs++;
    }
  }
  for (let i = 0; i < rightPart.length; i += 2) {
    if (rightPart.substr(i, 2) == "~O") {
      countDeafs++;
    }
  }
  return countDeafs;
};
