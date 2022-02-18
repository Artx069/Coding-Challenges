"use strict";
/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/
function encode(string) {
  "aeiou".split("").forEach((x, i, arr) => {
    let regExp = new RegExp(x, "g");
    string = string.replace(regExp, i + 1);
  });
  return string;
}

function decode(string) {
  return string
    .split("")
    .map((x) =>
      x == 1
        ? "a"
        : x == 2
        ? "e"
        : x == 3
        ? "i"
        : x == "4"
        ? "o"
        : x == "5"
        ? "u"
        : x
    )
    .join("");
}
