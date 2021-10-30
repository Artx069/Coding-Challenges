"use strict";

/*
Christmas is coming soon. Santa Claus is ready for the gift, he will give the gifts to the children. Of course, the gift of Santa Claus is not enough to give all the children, he needs to make a choice. Your task is to help Santa make the best choice:

Suppose Santa Claus has n gifts, and each child has a wish (the number of gifts to be obtained). Provides an array of integers wishes representing all the wishes. Like this:

n = 20
wishes = [2,4,3,5,6,10,12,100]
The result is a possible combination (an array) that happens to be able to distribute all of the gifts. In accordance with the above example, the results can be:

[2,3,5,10] or [4,6,10] or [2,6,12] or...
You should return one of them.

If there is no valid result, return a string "Mission Failed!"

Note:
n and all elements of wishes always be positive integers.
Some Examples
distributeGifts(20,[2,4,3,5,6,10,12,100]) 
Can return [2,3,5,10] or [4,6,10] or [2,6,12]...

distributeGifts(20,[10,10,40,100]) 
hould return [10,10]

istributeGifts(20,[20,40,100]) 
hould return [20]

istributeGifts(20,[30,40,100]) 
hould return "Mission Failed!"
*/
function distributeGifts(n, wishes) {
  let possibleArrs = [];
  for (let i = wishes.length - 1; i >= 0; i--) {
    let roundArr = [];
    let sum = 0;
    if (wishes[i] <= n) {
      sum += wishes[i];
      roundArr.push(wishes[i]);
      for (let j = i - 1; j >= 0; j--) {
        if (sum + wishes[j] <= n) {
          sum += wishes[j];
          roundArr.push(wishes[j]);
        }
      }
    }
    if (roundArr.reduce((a, b) => a + b, 0) == n) {
      possibleArrs.push(roundArr);
    }
  }

  return possibleArrs.length > 0 ? possibleArrs[0] : "Mission Failed!";
}
