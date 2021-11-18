"use strict";
/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/
function validParentheses(parens) {
  while (parens.includes("()")) {
    parens = parens.replace(/\(\)/, "");
  }
  return parens.length == 0;
}
