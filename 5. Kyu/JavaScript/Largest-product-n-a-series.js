"use strict";
/*
Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

Adapted from Project Euler.
*/
function greatestProduct(input) {
  let products = [];
  for (let i = 0; i < input.length - 4; i++) {
    let slice = input.slice(i, i + 5);
    products.push(
      slice
        .split("")
        .map((a) => parseInt(a))
        .reduce((a, b) => a * b)
    );
  }
  return Math.max(...products);
}
