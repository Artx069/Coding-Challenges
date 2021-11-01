"use strict";
/*
You will be given a string of English digits "stuck" together, like this:

"zeronineoneoneeighttwoseventhreesixfourtwofive"

Your task is to split the string into separate digits:

"zero nine one one eight two seven three six four two five"

Examples
"three"              -->  "three"
"eightsix"           -->  "eight six"
"fivefourseven"      -->  "five four seven"
"ninethreesixthree"  -->  "nine three six three"
"fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
*/
function uncollapse(digits) {
  let nums = "zero one two three four five six seven eight nine";

  let numsSplitted = nums.split(" ");
  for (let num of numsSplitted) {
    let regex = new RegExp(num, "g");
    digits = digits.replace(regex, num + " ");
  }
  return digits.trim();
}
