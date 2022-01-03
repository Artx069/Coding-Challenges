"use strict";
/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/
function score(dice) {
  let freq = new Map();
  let points = 0;

  for (let i of dice) {
    if (freq.has(i)) {
      freq.set(i, freq.get(i) + 1);
    } else {
      freq.set(i, 1);
    }
  }

  while ([...freq.keys()].length != 0) {
    if (freq.has(1)) {
      if (freq.get(1) >= 3) {
        points += 1000;
        freq.set(1, freq.get(1) - 3);
      } else {
        points += 100;
        freq.set(1, freq.get(1) - 1);
      }
      if (freq.get(1) == 0) {
        freq.delete(1);
      }
    }
    if (freq.has(6)) {
      if (freq.get(6) >= 3) {
        points += 600;
        freq.set(6, freq.get(6) - 3);
      }
      if (freq.get(6) < 3) {
        freq.delete(6);
      }
    }
    if (freq.has(5)) {
      if (freq.get(5) >= 3) {
        points += 500;
        freq.set(5, freq.get(5) - 3);
      } else {
        points += 50;
        freq.set(5, freq.get(5) - 1);
      }
      if (freq.get(5) == 0) {
        freq.delete(5);
      }
    }
    if (freq.has(4)) {
      if (freq.get(4) >= 3) {
        points += 400;
        freq.set(4, freq.get(4) - 3);
      }
      if (freq.get(4) < 3) {
        freq.delete(4);
      }
    }
    if (freq.has(3)) {
      if (freq.get(3) >= 3) {
        points += 300;
        freq.set(3, freq.get(3) - 3);
      }
      if (freq.get(3) < 3) {
        freq.delete(3);
      }
    }
    if (freq.has(2)) {
      if (freq.get(2) >= 3) {
        points += 200;
        freq.set(2, freq.get(2) - 3);
      }
      if (freq.get(2) < 3) {
        freq.delete(2);
      }
    }
  }
  return points;
}
