"use strict";
/*
Consider the following expansion:

solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

More examples in test cases.

Good luck!
*/
function solve(str) {
  function expanse(input) {
    input = charMatch(input);
    return input;
  }

  function charMatch(input) {
    if (input.match(/\w+\(\w+\)/)) {
      let matcher = input.match(/\w\(\w+\)/)[0];
      matcher = matcher.replace(/\)/, "");
      let split = matcher.split("(");
      if (split[0].match(/\d+/)) {
        let replacer = split[1].repeat(split[0]);
        input = input.replace(matcher + ")", replacer);
      } else {
        let replacer = split[0] + split[1];
        input = input.replace(matcher + ")", replacer);
      }
      return input;
    }
  }

  while (str.match(/\w\(\w+\)/)) {
    str = expanse(str);
  }

  return str;
}
