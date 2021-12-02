"use strict";
/*
Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.

Example:

evenBinary("101 111 100 001 010") // returns "101 111 010 001 100"
*/
function evenBinary(n) {
  let nums = n.split(" ").map((a) => parseInt(a, 2));
  let evens = nums.filter((a) => a % 2 == 0).sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      nums[i] = evens[index];
      index++;
    }
  }
  return nums
    .map((a) => "0".repeat(3 - a.toString(2).length) + a.toString(2))
    .join(" ");
}
