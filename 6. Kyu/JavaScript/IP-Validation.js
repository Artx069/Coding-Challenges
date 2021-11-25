"use strict";
/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/
function isValidIP(str) {
  if (/[a-z\s\n-]/i.test(str)) {
    return false;
  }
  let split = str.split(".");

  if (split.length > 4 || split.length < 4) {
    return false;
  } else {
    for (let num of split) {
      if (num.length > 1) {
        if (
          num.charAt(0) == "0" ||
          num.charAt(0) == "00" ||
          num.charAt(0) == "."
        ) {
          return false;
        }
      } else if (num.length == 0) {
        return false;
      }
      if (parseInt(num) > 255 || parseInt(num) < 0) {
        return false;
      }
    }
    return true;
  }
}
