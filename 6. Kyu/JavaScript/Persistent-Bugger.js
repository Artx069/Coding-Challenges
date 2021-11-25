"use strict";
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                 
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                  
 persistence(4) === 0 // because 4 is already a one-digit number
*/
function persistence(n) {
  let counter = 0;
  while (n.toString().length != 1) {
    n = multiplyEach(n);
    counter++;
  }

  return counter;
  function multiplyEach(n) {
    let nString = n.toString();
    if (nString.length == 1) {
      return Number(nString);
    } else {
      let sum = 1;
      for (let num of nString) {
        sum *= Number(num);
      }
      n = sum;
      return n;
    }
  }
}
