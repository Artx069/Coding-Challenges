"use strict";
/*
Your goal is to create a function to format a number given a template; if the number is not present, use the digits 1234567890 to fill in the spaces.

A few rules:

the template might consist of other numbers, special characters or the like: you need to replace only alphabetical characters (both lower- and uppercase);
if the given or default string representing the number is shorter than the template, just repeat it to fill all the spaces.
A few examples:

numericFormatter("xxx xxxxx xx","5465253289") === "546 52532 89"
numericFormatter("xxx xxxxx xx") === "123 45678 90"
numericFormatter("+555 aaaa bbbb", "18031978") === "+555 1803 1978"
numericFormatter("+555 aaaa bbbb") === "+555 1234 5678"
numericFormatter("xxxx yyyy zzzz") === "1234 5678 9012"
*/
function numericFormatter(...template) {
  template.length == 1 ? template.push("1234567890") : "";
  let i = 0;

  while (template[0].match(/[a-zA-Z]/)) {
    template[0] = template[0].replace(/[a-z]/i, template[1].charAt(i));
    i != template[1].length - 1 ? i++ : (i = 0);
  }
  return template[0];
}
