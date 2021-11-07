"use strict";
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str) {
  let splitted = [];
  let sol = [];
  if (str.indexOf("-") !== -1) {
    splitted = str.split("-");
  } else if (str.indexOf("_") !== 0) {
    splitted = str.split("_");
  }
  sol.push(splitted[0]);
  splitted.splice(0, 1);

  for (let word of splitted) {
    sol.push(word[0].toUpperCase() + word.substring(1));
  }

  return sol.join("");
}
