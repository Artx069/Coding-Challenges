"use strict";
/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

232
110011
54322345
Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). Return "Not valid" if the input is not an integer or is less than 0.

For this kata, single digit numbers are NOT considered numerical palindromes.

Examples
5        =>  false
2121     =>  true
1331     =>  true 
3357665  =>  true 
1294     =>  false 
"109982" =>  "Not valid"
-42      =>  "Not valid"
*/
function palindrome(n) {
  if (n < 10 || typeof n != "number") {
    return n < 10 && n > 0 ? false : "Not valid";
  }
  n = n.toString();

  let first = [];
  let second = [];

  for (let i = 0; i < n.length; i++) {
    let temp = n.charAt(i);
    if (n.indexOf(temp) != n.lastIndexOf(temp)) {
      first.push(temp);
      second.unshift(temp);
      n = n.replace(temp, "").replace(temp, "");
      i = 0;
    }
  }
  return n.length <= 1 ? true : false;
}
