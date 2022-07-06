"use strict";
/*
Design a data structure that supports the following two operations:

addWord (or add_word) which adds a word,
search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter
You may assume that all given words contain only lowercase letters.

Examples
addWord("bad")
addWord("dad")
addWord("mad")

search("pad") === false
search("bad") === true
search(".ad") === true
search("b..") === true
Note: the data structure will be initialized multiple times during the tests!
*/
var WordDictionary = function () {
  this.array = [];
  this.set = new Set();
};

WordDictionary.prototype.addWord = function (word) {
  this.array.push(word);
};

WordDictionary.prototype.search = function (word) {
  if (word == ".") {
    return this.array.filter((x) => x.length == 1).length != 0;
  }
  let bool =
    this.array.filter((x) => x.match(new RegExp("^" + word + "$"))).length != 0;
  if (bool == true) {
    this.set.add(word);
  }
  return bool;
};
