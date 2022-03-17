"use strict";
/*
Help prepare for the entrance exams to art school.

It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

Write a function that takes an integer and returns a list of strings with a line-by-line image of the object.

Below is an example function:

get_w(3) # should return:
[
'*   *   *',
' * * * * ',
'  *   *  '
]

get_w(5) # should return:
[
'*       *       *',
' *     * *     * ',
'  *   *   *   *  ',
'   * *     * *   ',
'    *       *    '
]
*/
function getW(n) {
  if (n < 2) {
    return [];
  }
  let sol = [];

  for (let i = 0; i < n; i++) {
    let temp;
    if (i == n - 1) {
      temp = " ".repeat(i) + "*";
    } else {
      temp = " ".repeat(i) + "*" + " ".repeat((n - i) * 2 - 3) + "*";
    }
    if (i == 0) {
      temp += temp.substring(1);
    } else {
      temp += " ".repeat(i - 1) + temp + " ".repeat(i);
    }
    sol.push(temp);
  }
  return sol;
}
