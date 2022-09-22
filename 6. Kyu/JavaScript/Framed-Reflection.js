"use strict";
/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/
function mirror(text) {
  text = text
    .split(" ")
    .map((x) => "* " + x.split("").reverse().join("") + " *");
  let longest = Math.max(...text.map((x) => x.length));
  text.unshift("*".repeat(Math.max(...text.map((x) => x.length))));

  text.push("*".repeat(Math.max(...text.map((x) => x.length))));

  for (let i = 0; i < text.length; i++) {
    if (text[i].length < longest) {
      text[i] =
        text[i].substring(0, text[i].lastIndexOf("*")) +
        " ".repeat(longest - text[i].length) +
        "*";
    }
  }
  return text.join("\n");
}
