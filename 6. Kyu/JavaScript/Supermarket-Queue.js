"use strict";
/*
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
*/
function queueTime(customers, n) {
  let counter = 0;
  while (customers.length != 0) {
    counter++;
    for (let i = 0; i < n; i++) {
      if (customers[i]) {
        customers[i]--;
      }
    }
    customers = customers.filter((a) => a != 0);
  }
  return counter;
}
