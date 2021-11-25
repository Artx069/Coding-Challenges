"use strict";
/*
Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits.

Valid Output
#ffffff
#FfFfFf
#25a403
#000001
Non-Valid Output
#fff
#aaa
#zzzzz
cafebabe
#a567567676576756A7
*/
var generateColor = function () {
  let string = "#";

  for (let i = 0; i < 6; i++) {
    let char = Math.floor(Math.random() * 16);
    if (char >= 10) {
      string += String.fromCharCode(char + 55);
    } else {
      string += char;
    }
  }
  return string;
};
