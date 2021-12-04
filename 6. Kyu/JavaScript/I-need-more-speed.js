"use strict";
/*
Write a function that will take in any array and reverse it.

Sounds simple doesn't it?

NOTES:

Array should be reversed in place! (no need to return it)
Usual builtins have been deactivated. Don't count on them.
You'll have to do it fast enough, so think about performances
*/
function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let front = arr[0 + i];
    let back = arr[arr.length - 1 - i];
    arr[0 + i] = back;
    arr[arr.length - 1 - i] = front;
  }
}
