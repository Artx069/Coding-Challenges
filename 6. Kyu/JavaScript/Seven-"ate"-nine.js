"use strict";
/*
Seven is a hungry number and its favourite food is number 9. 
Whenever it spots 9 through the hoops of 8, it eats it! 
Well, not anymore, because you are going to help the 9 by 
locating that particular sequence (7,8,9) in an array of digits 
and tell 7 to come after 9 instead. Seven "ate" nine, no more! 
(If 9 is not in danger, just return the same array)
*/
function hungrySeven(arr) {
  let arrString = arr.toString();
  while (arrString.match(/7,8,9/)) {
    arrString = arrString.replace(/7,8,9/, "8,9,7");
  }

  arr = arrString.split(",").map(function (item) {
    return parseInt(item, 10);
  });
  return arr;
}
