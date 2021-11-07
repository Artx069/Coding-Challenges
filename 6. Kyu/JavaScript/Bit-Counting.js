"use strict";

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
var countBits = function (n) {
  let bytesUntilN = [];
  let currentByte = 1;

  while (currentByte <= n) {
    bytesUntilN.push(currentByte);

    currentByte = currentByte * 2;
  }

  bytesUntilN = bytesUntilN.reverse();
  let byteRepresentation = [];
  let countOnes = 0;

  for (let byte of bytesUntilN) {
    if (n - byte >= 0) {
      byteRepresentation.push(1);
      n = n - byte;
      countOnes++;
    } else {
      byteRepresentation.push(0);
    }
  }
  return countOnes;
};
