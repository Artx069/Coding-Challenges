"use strict";
/*
Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

Do not use built in functions.

Usage:

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(); 
You can learn more about Base64 encoding and decoding here.

Note: This kata uses the non-padding version ("=" is not added to the end).
*/
String.prototype.toBase64 = function toBase64() {
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let s = this;
  return s
    .split("")
    .map((a) => a.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("")
    .match(/.{1,6}/g)
    .map((a) => base64.charAt(parseInt(a, 2)))
    .join("");
};

String.prototype.fromBase64 = function fromBase64() {
  s2 = this;
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  return s2
    .split("")
    .map((a) => base64.indexOf(a).toString(2).padStart(6, "0"))
    .join("")
    .match(/.{1,8}/g)
    .map((a) => String.fromCharCode(parseInt(a, 2)))
    .join("");
};
