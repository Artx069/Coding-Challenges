"use strict";
/*
Vicky is quite the small wonder. Most people don't even realize she's not a real girl, but a robot living amongst us. Sure, if you stick around her home for a while you might see her creator open up her back and make a few tweaks and even see her recharge in the closet instead of sleeping in a bed.

In this kata, we're going to help Vicky keep track of the words she's learning.

Write a function, learnWord(word) ( LearnWord(word) in C# ) which is a method of the Robot object. The function should report back whether the word is now stored, or if she already knew the word.

Example:

var vicky = new Robot();
vicky.learnWord('hello') -> 'Thank you for teaching me hello'
vicky.learnWord('abc') -> 'Thank you for teaching me abc'
vicky.learnWord('hello') -> 'I already know the word hello'
vicky.learnWord('wow!') -> 'I do not understand the input'
Case shouldn't matter. Only alpha characters are valid. There's also a little trick here. Enjoy!
*/
function Robot() {
  this.set = new Set([
    ..."Thank you for teaching me".toLowerCase().split(" "),
    ..."I already know the word".toLowerCase().split(" "),
    ..."I do not understand the input".toLowerCase().split(" "),
  ]);
}

Robot.prototype.learnWord = function (x) {
  console.log(this.set, x);
  if (x.match(/[^a-zA-Z]/) || x == "") {
    return "I do not understand the input";
  }
  if (!this.set.has(x.toLowerCase())) {
    this.set.add(x);
    return "Thank you for teaching me " + x;
  } else {
    return "I already know the word " + x;
  }
};
