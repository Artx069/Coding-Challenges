"use strict";
/*
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// before
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

// after
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a']
*/
function exchangeWith(a, b) {
  let temp = [...a].reverse();
  let bemp = [...b].reverse();

  for (let i = 0; i < bemp.length; i++) {
    if (a[i] != undefined) {
      a[i] = bemp[i];
    } else {
      a.push(bemp[i]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    if (b[i] != undefined) {
      b[i] = temp[i];
    } else {
      b.push(temp[i]);
    }
  }

  while (a.length != bemp.length) {
    a.pop();
  }
  while (b.length != temp.length) {
    b.pop();
  }
}
