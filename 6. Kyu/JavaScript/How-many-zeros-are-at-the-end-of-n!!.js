"use strict";
/*
Define n!! as

n!! = 1 * 3 * 5 * ... * n if n is odd,

n!! = 2 * 4 * 6 * ... * n if n is even.

Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.

For a positive integer n, please count how many zeros are there at the end of n!!.

Example:

30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30 
30!! = 42849873690624000 (3 zeros at the end) 
*/
function countZeros(n) {
  n = BigInt(n);
  let str = doublefactorial(n).toString().match(/[0]+$/);
  return str == null ? 0 : str[0].length;
}
function doublefactorial(n) {
  if (n == 0n || n == 1n) return 1n;
  return n * doublefactorial(n - 2n);
}
