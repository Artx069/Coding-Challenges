"use strict";
/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
function encrypt(text, n) {
  if (text == null) {
    return null;
  }
  for (let i = 0; i < n; i++) {
    text = altSplit(text);
  }
  return text;

  function altSplit(s) {
    s =
      s
        .split("")
        .filter((x, i, _) => i % 2 == 1)
        .join("") +
      s
        .split("")
        .filter((x, i, _) => i % 2 == 0)
        .join("");
    return s;
  }
}

function decrypt(encryptedText, n) {
  if (encryptedText == null) {
    return null;
  }
  for (let i = 0; i < n; i++) {
    encryptedText = altSplitDecrypt(encryptedText);
  }
  return encryptedText;

  function altSplitDecrypt(s) {
    let firstPart = s.substring(0, s.length / 2).split("");
    let secondPart = s.substring(s.length / 2, s.length).split("");
    let str = "";
    while (firstPart.length > 0 || secondPart.length > 0) {
      secondPart.length > 0 ? (str += secondPart.splice(0, 1)) : "";
      firstPart.length > 0 ? (str += firstPart.splice(0, 1)) : "";
    }
    return str;
  }
}
