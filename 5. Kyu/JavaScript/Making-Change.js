"use strict";
/*
Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in in other languages)

The argument passed in will be an integer representing the value in cents. The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

Examples
makeChange(0)   //-->  {}
makeChange(1)   //-->  {"P":1}
makeChange(43)  //-->  {"Q":1, "D":1, "N":1, "P":3}
makeChange(91)  //-->  {"H":1, "Q":1, "D":1, "N":1, "P":1}
*/
const makeChange = (amount) => {
  let obj = { H: 0, Q: 0, D: 0, P: 0 };

  obj.H = Math.floor(amount / 50);
  amount = amount - obj.H * 50;
  obj.Q = Math.floor(amount / 25);
  amount = amount - obj.Q * 25;
  obj.D = Math.floor(amount / 10);
  amount = amount - obj.D * 10;
  obj.N = Math.floor(amount / 5);
  amount = amount - obj.N * 5;
  obj.P = Math.floor(amount / 1);
  amount = amount - obj.D * 1;
  Object.entries(obj).forEach((x) => {
    if (x[1] == 0) {
      delete obj[x[0]];
    }
  });
  return obj;
};
