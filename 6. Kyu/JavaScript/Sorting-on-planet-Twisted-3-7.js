"use strict";
/*
#Sorting on planet Twisted-3-7

There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: #The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
There is no need for a precheck. The array will always be not null and will always contain at least one number.

You should not modify the input array!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/
function sortTwisted37(array) {
  console.log(array);
  return array
    .map((x) => {
      let temp = x.toString().split("");
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].toString().includes("3")) {
          temp[i] = temp[i].toString().replace(/3/g, "7");
        } else if (x.toString().includes("7")) {
          temp[i] = temp[i].toString().replace(/7/g, "3");
        }
      }
      x = Number(temp.join(""));
      return x;
    })
    .sort((x, y) => x - y)
    .map((x) => {
      let temp = x.toString().split("");
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].toString().includes("3")) {
          temp[i] = temp[i].toString().replace(/3/g, "7");
        } else if (x.toString().includes("7")) {
          temp[i] = temp[i].toString().replace(/7/g, "3");
        }
      }
      x = Number(temp.join(""));

      return x;
    });
}
