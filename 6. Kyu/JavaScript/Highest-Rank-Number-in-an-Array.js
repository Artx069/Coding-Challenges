"use strict";
/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
function highestRank(arr) {
  let mostFreq = -1;
  let mostFreqEle = -1;
  let set = new Set(arr);
  for (let ele of set) {
    let eleFreq = arr.filter((x) => x == ele).length;
    if (eleFreq > mostFreq) {
      mostFreq = eleFreq;
      mostFreqEle = ele;
    } else if (eleFreq == mostFreq) {
      mostFreqEle = ele > mostFreqEle ? ele : mostFreqEle;
    }
  }
  return mostFreqEle;
}
