"use strict";
/*
Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/
function strToHash(str) {
  let arr = str.replace(/ /g, "").split(",");
  let obj = {};

  for (let input of arr) {
    if (input != "") {
      obj[input.split("=")[0]] =
        Number(input.split("=")[1]) || input.split("=")[1];
    }
  }
  return obj;
}
