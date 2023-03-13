"use strict";
/*
Here is a rope with a length of x cm. We will cut it in the following way: each m cm to make a mark, and then each n cm to make a mark. Finally, We cut the rope from the marked place. Please calculate that we have a total of several kinds of length of the rope, and how many of each kind of rope?

For example:

length=10  -----here is a rope with length of 10 cm, each "-" is 1cm
----------
m=2  -----------we make marks at each 2cm, "." is the mark
--.--.--.--.--
n=3  -----------we make marks at each 3cm, "." is the mark
--.-.-.--.--.-.-
cut the rope from these marked place, we got:
--  -  -  --  --  -  -
so the result should be: 1cm rope x 4 and 2cm rope x 3
Task
Complete function cutRope() that accepts three arguments length, m and n(three positive integer). Their meaning please refer to the above explanation.

You should return an object that contains all kinds of rope and its numbers. Like the example above, should return: {"1cm":4,"2cm":3}

Examples
cutRope(6,2,3) === {"1cm":2,"2cm":2}
cutRope(7,2,3) === {"1cm":3,"2cm":2}
cutRope(10,2,3) === {"1cm":4,"2cm":3}
cutRope(10,2,5) === {"1cm":2,"2cm":4}
cutRope(11,2,5) === {"1cm":3,"2cm":4}
*/
function cutRope(length, m, n) {
  length = "-".repeat(length);
  for (let i = 0; i < length.length; i++) {
    if ((i + 1) % (m + 1) == 0) {
      length = length.substring(0, i) + "." + length.substring(i);
    }
  }
  let counter = 0;
  for (let i = 0; i < length.length; i++) {
    if (length.charAt(i) == "-") {
      counter++;
    }
    if (counter == n) {
      counter = 0;
      if (length.charAt(i + 1) != ".") {
        length = length.substring(0, i + 1) + "." + length.substring(i + 1);
      }
    }
  }
  let sol = {};
  length = length
    .replace(/[\.]+/g, " ")
    .split(" ")
    .map((x) => x.length)
    .sort((a, b) => a - b)
    .filter((x) => x != 0);

  for (let el of length) {
    let key = el + "cm";
    if (!(key in sol)) {
      sol[key] = 1;
    } else {
      sol[key] += 1;
    }
  }
  return sol;
}
