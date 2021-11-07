"use strict";
/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/
function towerBuilder(nFloors) {
  let maxStars = 0;
  let whitespaces = 0;
  let sol = [];

  for (let i = 0; i < nFloors; i++) {
    if (i >= 1) {
      maxStars += 2;
    } else {
      maxStars += 1;
    }
  }
  for (let i = 0; i < nFloors; i++) {
    sol.push(
      " ".repeat(whitespaces / 2) +
        "*".repeat(maxStars) +
        " ".repeat(whitespaces / 2)
    );

    maxStars -= 2;
    whitespaces += 2;
  }
  return sol.reverse();
}
