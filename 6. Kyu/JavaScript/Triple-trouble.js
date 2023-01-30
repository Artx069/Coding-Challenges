"use strict";
/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/
function tripledouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  while (num1.match(/(\d)\1{2,}/)) {
    if (num1.match(/(\d)\1{2,}/)) {
      let digit = num1.match(/(\d)\1{2,}/)[1];
      let reg = new RegExp(digit + "{2}");
      if (num2.match(reg)) {
        return 1;
      }
      num1 = num1.replace(digit.toString().repeat(3), "xxx");
    }
  }

  return 0;
}
