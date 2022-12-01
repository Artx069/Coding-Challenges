"use strict";
/*
You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}
Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}
Rules
Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.
*/
const removeDuplicateIds = (obj) => {
  let set = new Set();
  let keys = Object.keys(obj);

  for (let i = keys.length - 1; i >= 0; i--) {
    let key = keys[i];
    let arr = obj[key];

    for (let j = 0; j < arr.length; j++) {
      if (!set.has(arr[j])) {
        set.add(arr[j]);
      } else {
        arr.splice(j, 1);
        j--;
      }
    }
    obj[key] = arr;
  }
  return obj;
};
