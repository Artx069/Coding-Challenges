"use strict";
/*
Consider a deck of 52 cards, which are represented by a string containing their suit and face value.

Your task is to write two functions encode and decode that translate an array of cards to/from an array of integer codes.

function encode :

input : array of strings (symbols)

output : array of integers (codes) sorted in ascending order

function decode :

input : array of integers (codes)

output : array of strings (symbols) sorted by code values

['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
[0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding
The returned array must be sorted from lowest to highest priority (value or precedence order, see below).

Card suits:
name    |  symbol   |  precedence
---------------------------------
club          c            0
diamond       d            1
heart         h            2
spade         s            3
52-card deck:
  c     |     d     |    h     |    s
----------------------------------------
 0: A      13: A      26: A      39: A
 1: 2      14: 2      27: 2      40: 2
 2: 3      15: 3      28: 3      41: 3
 3: 4      16: 4      29: 4      42: 4
 4: 5      17: 5      30: 5      43: 5
 5: 6      18: 6      31: 6      44: 6
 6: 7      19: 7      32: 7      45: 7
 7: 8      20: 8      33: 8      46: 8
 8: 9      21: 9      34: 9      47: 9
 9: T      22: T      35: T      48: T
10: J      23: J      36: J      49: J
11: Q      24: Q      37: Q      50: Q
12: K      25: K      38: K      51: K
*/
function encode(input) {
  let codes = "A23456789TJQK";
  let symbols = "cdhs";
  return input
    .map((value) =>
      parseInt(
        symbols.indexOf(value.charAt(1)) * 13 + codes.indexOf(value.charAt(0))
      )
    )
    .sort((a, b) => a - b);
}

function decode(input) {
  input = input.sort((a, b) => a - b);
  let codes = "A23456789TJQK";
  let symbols = "cdhs";

  return input.map(
    (value) =>
      codes.charAt(value % 13) + "" + symbols.charAt(Math.floor(value / 13))
  );
}