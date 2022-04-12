"use strict";
/*
##Task: You have to write a function add which takes two binary numbers as strings and returns their sum as a string.

##Note:

You are not allowed to convert binary to decimal & vice versa.
The sum should contain No leading zeroes.
##Examples:

add('111','10'); => '1001'
add('1101','101'); => '10010'
add('1101','10111') => '100100'
*/
function add(a, b) {
  let leftover = 0;
  let shorter = (a.length <= b.length ? a : b).split("").reverse().join("");
  let longer = (a.length > b.length ? a : b).split("").reverse().join("");
  let sol = "";
  for (let i = 0; i < longer.length; i++) {
    tempLonger = longer[i];
    tempShorter = shorter[i] || 0;
    let sum = Number(tempLonger) + Number(tempShorter) + leftover;
    if (sum == 3) {
      leftover = 1;
      sol += 1;
    } else if (sum == 2) {
      leftover = 1;
      sol += 0;
    } else {
      leftover = 0;
      sol += sum;
    }
  }
  return (
    (sol + leftover).split("").reverse().join("").replace(/^[0]+/, "") || "0"
  );
}
