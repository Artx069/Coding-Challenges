"use strict";
/*
Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

{                             {
  { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
  { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
  { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
}                             }
 
The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.
*/
function separateLiquids(glass) {
  if (glass.length == 0) {
    return [];
  }

  let order = ["O", "A", "W", "H"];

  function chunks(array, chunkSize) {
    let finArr = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      console.log(chunk);
      finArr.push(chunk);
    }
    return finArr;
  }

  return chunks(
    JSON.stringify(glass)
      .replace(/[\[\]\"]/g, "")
      .split(",")
      .sort((a, b) => order.indexOf(a) - order.indexOf(b)),
    glass[0].length
  );
}
