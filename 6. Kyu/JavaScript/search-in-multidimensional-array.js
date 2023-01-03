"use strict";
/*
Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
*/
var locate = function (arr, value) {
  let myJSON = JSON.stringify(arr);
  myJSON = "[" + myJSON.replace(/[\[\]]/g, "") + "]";
  let arrAfter = JSON.parse(myJSON);
  if (typeof value === "string") {
    value = value.replace(/[\[\]]/g, "");
  }

  return arrAfter.indexOf(value) != -1;
};
