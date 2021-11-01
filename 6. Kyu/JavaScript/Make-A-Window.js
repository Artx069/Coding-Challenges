"use strict";
/*
Make me a window. I'll give you a number (N). You return a window.

Rules:

The window will always be 2 x 2.

The window needs to have N number of periods across and N number of periods vertically in each pane.

Example:

N = 3

---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------
Note: there should be no trailing new line characters at the end.
*/
function makeAWindow(n) {
  let lines = [];
  for (let i = 0; i < n; i++) {
    let dots = "";
    for (let j = 0; j < n; j++) {
      dots += ".";
    }
    let string = "|" + dots + "|" + dots + "|";
    lines.push(string);
  }
  let upperPart = "-".repeat(lines[0].length) + "\n" + lines.join("\n");
  let middle =
    "\n" +
    "|" +
    "-".repeat((lines[0].length - 2) / 2) +
    "+" +
    "-".repeat((lines[0].length - 2) / 2) +
    "|";
  let lowerPart = "\n" + lines.join("\n") + "\n" + "-".repeat(lines[0].length);
  let sol = upperPart + middle + lowerPart;
  return sol;
}
