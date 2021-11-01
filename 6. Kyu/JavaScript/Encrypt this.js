"use strict";
/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
var encryptThis = function (text) {
  let sSplitted = text.split(" ");
  let sol = [];

  for (let word of sSplitted) {
    let newWord = "";
    if (word.length == 1) {
      newWord += word.charCodeAt(0);
    } else if (word.length < 3) {
      newWord += word.charCodeAt(0) + word.substring(1);
    } else {
      newWord +=
        word.charCodeAt(0) +
        word.substring(word.length - 1) +
        word.substring(2, word.length - 1) +
        word.substring(1, 2);
    }

    sol.push(newWord);
  }
  return sol.join(" ");
};
