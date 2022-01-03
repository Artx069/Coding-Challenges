"use strict";
/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag(str) {
  str = str.replace(/\s+/g, " ").trim();

  let split = str.split(" ");
  let sol = "";
  split.forEach((element) => {
    element = element.toLocaleLowerCase();
    sol += element.slice(0, 1).toUpperCase() + element.slice(1, element.length);
  });

  if (str.length >= 140 || str.length < 1) {
    return false;
  } else {
    return "#" + sol;
  }
}
