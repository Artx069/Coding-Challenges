"use strict";
/*
Write a function that calculates the least common multiple of its arguments; 
each argument is assumed to be a non-negative integer. 
In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.
*/
var lcm = function (...input) {
  let check = false;
  input = input.sort((a, b) => b - a);
  let initial = input[0];

  if (input.length == 0) {
    return 1;
  } else if (input.length == 1) {
    return input[0];
  } else if (input.indexOf(0) != -1) {
    return 0;
  } else {
    while (check == false) {
      for (let i = 1; i < input.length; i++) {
        if (input[0] % input[i] == 0) {
          check = true;
        } else {
          check = false;
          break;
        }
      }
      if (check == false) {
        input[0] += initial;
      }
    }
    return input[0];
  }
};
