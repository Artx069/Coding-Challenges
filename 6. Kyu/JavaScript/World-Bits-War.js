"use strict";
/*
Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

The side with the largest cumulated strength wins.

Again, three possible outcomes: odds win, evens win and tie.

Examples:

bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2
*/
function bitsWar(numbers) {
  let evens = numbers
    .filter((a) => Math.abs(a) % 2 == 0)
    .map((a) => a.toString(2).replace(/0/g, ""));
  let odds = numbers
    .filter((a) => Math.abs(a) % 2 == 1)
    .map((a) => a.toString(2).replace(/0/g, ""));

  let sumEvens = 0;
  let sumOdds = 0;
  for (let ones of evens) {
    if (ones.charAt(0) == "-") {
      sumEvens -= ones.length - 1;
    } else {
      sumEvens += ones.length;
    }
  }
  for (let ones of odds) {
    if (ones.charAt(0) == "-") {
      sumOdds -= ones.length - 1;
    } else {
      sumOdds += ones.length;
    }
  }
  if (sumEvens === sumOdds) {
    return "tie";
  } else if (sumEvens > sumOdds) {
    return "evens win";
  } else {
    return "odds win";
  }
}
