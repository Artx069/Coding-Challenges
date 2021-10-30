"use strict";
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(str) {
  while (str.match(/\w[A-Z]/)) {
    let index = str.match(/\w[A-Z]/).index;
    str =
      str.substring(0, index + 1) + " " + str.substring(index + 1, str.length);
  }
  return str;
}
