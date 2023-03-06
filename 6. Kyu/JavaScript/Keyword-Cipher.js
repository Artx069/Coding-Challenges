"use strict";
/*
Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz
hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.
*/
function keywordCipher(string, keyword) {
  let ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  let newALPHABET = removeKeywordChars(keyword, ALPHABET);
  return string
    .split("")
    .map((x) =>
      x == " "
        ? " "
        : x == x.toUpperCase
        ? newALPHABET.charAt(ALPHABET.indexOf(x.toLowerCase())).toUpperCase()
        : newALPHABET.charAt(ALPHABET.indexOf(x.toLowerCase()))
    )
    .join("");
}
function removeKeywordChars(keyword, alph) {
  let alphSplitted = alph.split("");
  let set = new Set();
  for (let char of keyword) {
    let index = alphSplitted.indexOf(char.toLowerCase());
    let charAtIndex = alphSplitted[index];
    if (!set.has(charAtIndex) && index != -1) {
      alphSplitted.splice(index, 1);
      set.add(charAtIndex);
    }
  }
  keyword = [...new Set(keyword.split(""))].join("");
  return keyword + alphSplitted.join("");
}
