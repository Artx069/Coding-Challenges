"use strict";
/*
Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/
function dataReverse(data) {
  let chunks = [];

  while (data.length != 0) {
    chunks.push(data.slice(0, 8));
    data.splice(0, 8);
  }

  let sol = [];
  chunks = chunks.reverse();
  for (let chunk of chunks) {
    for (let e of chunk) {
      sol.push(e);
    }
  }

  return sol;
}
