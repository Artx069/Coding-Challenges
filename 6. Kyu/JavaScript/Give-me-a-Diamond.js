"use strict";
/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/
function diamond(n) {
  if (n < 0 || n % 2 == 0) {
    return null;
  }
  let s = "";
  for (let i = 1; i <= n; i += 2) {
    if (i % 2 == 1) {
      console.log(i);
      s += " ".repeat(Math.floor((n - i) / 2)) + "*".repeat(i) + "\n";
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i % 2 == 1) {
      s += " ".repeat(Math.floor((n - i) / 2)) + "*".repeat(i) + "\n";
    }
  }
  return s;
}
