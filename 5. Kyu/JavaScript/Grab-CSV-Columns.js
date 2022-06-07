"use strict";
/*
Write a function that takes a CSV (format shown below) and a sequence of indices, which represents the columns of the CSV, and returns a CSV with only the columns specified in the indices sequence.

CSV format:
The CSV passed in will be a string and will have one or more columns, and one or more rows. The CSV will be of size NxM. Each row is separated by a new line character \n. There will be no spaces in the CSV string.

Example format of passed in CSV: "1,2,3\n4,5,6\n7,8,9\n10,11,12"

How it would look:

1,2,3
4,5,6
7,8,9
10,11,12
Indices Array info:
The indices will be zero based, so the first column will be represented as a 0 in the indices sequence. All values in the indices sequence will be integers from 0 and up. All test cases will have an indices sequence of one or more integers. Ignore indices that map to a column that doesn't exist. If all the values in the indices array do NOT map to any existing column, return an empty string "".

The columns of the result must be ordered and not repeated.

Examples:
csvColumns("1,2,3\n4,5,6", [0, 1]) => "1,2\n4,5"
csvColumns("1,2\n3,4\n5,6", [5, 6, 7]) => ""
csvColumns("a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j", [1, 3, 5, 7]) => "b,d\n2,4\ng,i"
*/
function csvColumns(csv, indices) {
  indices = indices
    .filter((x, i, _) => i == indices.indexOf(x))
    .sort((a, b) => a - b);

  let splitted = csv.split("\n").map((x) => x.split(","));
  let sol = "";
  for (let row of splitted) {
    let check = false;
    for (let i of indices) {
      if (row.length > i) {
        check = true;
        sol += row[i] + ",";
      }
    }
    if (check) {
      sol = sol.substr(0, sol.length - 1) + "\n";
    }
  }
  return sol.trim();
}
