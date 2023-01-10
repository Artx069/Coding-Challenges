"use strict";
/*
Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.
*/
const squares = (n) => {
  let arr = [];
  for (i = 1; i <= n; i++) {
    arr.push(Math.pow(i, 2));
  }
  return arr;
};

const range = (n, start, step) => {
  let arr = [start];
  while (arr.length < n) {
    arr.push((start += step));
  }
  return arr;
};

const random = (n, min, max) => {
  let arr = [];
  while (arr.length < n) {
    arr.push(Math.floor(Math.random() * (max + 1 - min) + min));
  }
  return arr;
};

const primes = (n) => {
  let arr = [];
  if (n == 1) {
    arr.push(2);
  }
  let num = 2;
  while (arr.length < n) {
    let check = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        check = false;
        break;
      }
    }
    if (check) {
      arr.push(num);
    }
    num++;
  }
  return arr;
};
