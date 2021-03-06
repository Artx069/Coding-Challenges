"use strict";
/*
Sir Bobsworth is a custodian at a local data center. As he suspected, Bobsworth recently found out he is to be fired on his birthday after years of pouring his soul into maintaining the facility.

Bobsworth, however, has other plans.

Bobsworth knows there are 1 to n switches in the breaker box of the data center. Moving from switch 1 to n, Bob first flips every switch off. Beginning from the first switch again, Bob then flips every 2nd switch. Once again starting from the first switch, Bob then flips every 3rd switch. Bob continues this pattern until he flips every nth switch & makes n passes.

At the end of Bobsworth's mayhem, how many switches are turned off?

Specifications
Create the function off, that receives the nth switch as argument n. The function should return an ascending array containing all of the switch numbers that remain off after Bob completes his revenge.

off (1) //returns {1}
off (2) //returns {1}
off (4) //returns {1,4}
off (9) //returns {1,4,9}
off(1) # returns [1]
off(2) # returns [1]
off(4) # returns [1, 4]
The parameter n will always be a number >= 1.
*/
function off(n) {
  let switches = [];

  for (let i = 0; i < n; i++) {
    switches.push([i + 1, false]);
  }
  console.log();
  let mod = 1;
  for (let j = 0; j < n; j++) {
    for (let i = 1; i <= n; i++) {
      if (i % mod == 0) {
        let trueOrFalse = switches[i - 1][1];
        switches[i - 1][1] = !trueOrFalse;
      }
    }
    mod++;
  }
  let sol = [];

  for (let s of switches) {
    s[1] == true ? sol.push(s[0]) : "";
  }

  return sol;
}
