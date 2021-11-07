"use strict";
/*
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:


I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1

You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:


I I   I
 I   I
  I   
   I   

Return a string with the current field.

Note that:
String.prototype.replace() is not allowed!

You begin a new line with \n
Each Line must be 7 chars long
Fill the missing pins with a whitespace
*/
function bowlingPins(arr) {
  let pins = "I I I I\n I I I \n  I I  \n   I   ";
  let pind = "7 8 9 X\n 4 5 6 \n  2 3  \n   1   ";
  let pinsArr = pins.split("");
  for (let num of arr) {
    num = num == "10" ? "X" : num;
    pinsArr[pind.indexOf(num)] = " ";
  }
  return pinsArr.join("");
}
