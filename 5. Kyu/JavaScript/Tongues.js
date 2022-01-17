"use strict";
/*
Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. Recently, due to programming work by a hacker known only by the code name ROT13, it has been discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.

This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).

Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.

So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'

The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.

Your job is to write a function that decodes Gandalf's writings.

Input
The function will be passed a string for the function to decode. Each string will contain up to 100 characters, representing some text written by Gandalf. All characters will be plain ASCII, in the range space (32) to tilde (126).

Output
For each string passed to the decode function return its translation.
*/
function tongues(input) {
  let map = new Map();
  map.set("e", "a");
  map.set("o", "i");
  map.set("u", "y");
  map.set("a", "e");
  map.set("i", "o");
  map.set("y", "u");
  map.set("E", "A");
  map.set("O", "I");
  map.set("U", "Y");
  map.set("A", "E");
  map.set("I", "O");
  map.set("Y", "U");
  map.set("B", "P");
  map.set("K", "V");
  map.set("X", "J");
  map.set("Z", "Q");
  map.set("N", "T");
  map.set("H", "S");
  map.set("D", "R");
  map.set("C", "L");
  map.set("W", "M");
  map.set("G", "F");
  map.set("P", "B");
  map.set("V", "K");
  map.set("J", "X");
  map.set("Q", "Z");
  map.set("T", "N");
  map.set("S", "H");
  map.set("R", "D");
  map.set("L", "C");
  map.set("M", "W");
  map.set("F", "G");
  map.set("b", "p");
  map.set("k", "v");
  map.set("x", "j");
  map.set("z", "q");
  map.set("n", "t");
  map.set("h", "s");
  map.set("d", "r");
  map.set("c", "l");
  map.set("w", "m");
  map.set("g", "f");
  map.set("p", "b");
  map.set("v", "k");
  map.set("j", "x");
  map.set("q", "z");
  map.set("t", "n");
  map.set("s", "h");
  map.set("r", "d");
  map.set("l", "c");
  map.set("m", "w");
  map.set("f", "g");
  let output = "";
  for (let c of input) {
    map.has(c) ? (output += map.get(c)) : (output += c);
  }
  return output;
}
