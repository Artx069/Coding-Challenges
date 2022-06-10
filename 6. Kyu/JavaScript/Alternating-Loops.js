"use strict";
/*
Write

function combine()
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
Arrays can have different lengths.
*/
function combine(...element) {
  let elements = element;
  let sol = [];
  while (elements.length != 0) {
    for (let i = 0; i < elements.length; i++) {
      sol.push(elements[i].shift());
    }

    elements = elements.filter((x) => x.length > 0);
  }
  return sol;
}
