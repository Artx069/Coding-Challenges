"use strict";
/*
Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of � 3 n 3 , 
the cube above will have volume of ( � − 1 ) 3 (n−1) 3 and so on 
until the top which will have a volume of 1 3 1 3 . 
You are given the total volume m of the building. 
Being given m can you find the number n of cubes you will have to build? 
The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m 
and you have to return the integer 
n such as � 3 + ( � − 1 ) 3 + ( � − 2 ) 3 + . . . + 1 3 = � n 3 +(n−1) 3 +(n−2) 3 +...+1 3 =m 
if such a n exists or -1 if there is no such n.
*/
function findNb(m) {
  let count = 1;
  while (m > 0) {
    m -= Math.pow(count, 3);
    count++;
  }
  return m < 0 ? -1 : count - 1;
}
