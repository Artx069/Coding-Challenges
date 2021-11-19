"use strict";
/*
Create a function that returns a christmas tree of the correct height.

For example:

height = 5 should return:

    *    
   ***   
  *****  
 ******* 
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.
*/
function christmasTree(height) {
  let maxStars = 1;
  let sol = "";
  for (let i = 1; i < height; i++) {
    maxStars += 2;
  }

  for (let i = height - 1; i >= 0; i--) {
    sol += " ".repeat(i) + "*".repeat(maxStars - i * 2) + " ".repeat(i) + "\n";
  }
  return sol.trimRight();
}
