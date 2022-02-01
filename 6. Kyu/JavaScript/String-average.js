"use strict";
/*
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/
function averageString(str) {
  let map = new Map();
  map.set("one", 1);
  map.set("two", 2);
  map.set("three", 3);
  map.set("four", 4);
  map.set("five", 5);
  map.set("six", 6);
  map.set("seven", 7);
  map.set("eight", 8);
  map.set("nine", 9);
  map.set("zero", 0);
  let s = str.split(" ").map((x) => (map.has(x) ? map.get(x) : "n/a"));
  s.indexOf("n/a") == -1
    ? (s = s.reduce((a, b) => a + b) / str.split(" ").length)
    : (s = "n/a");
  for (let k of map.keys()) {
    if (map.get(k) == Math.floor(s)) {
      console.log(k);
      return k;
    }
  }
  return s;
}
