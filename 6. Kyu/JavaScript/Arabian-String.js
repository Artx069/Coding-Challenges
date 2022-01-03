"use strict";
/*
You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
*/
function camelize(str) {
  let split = str.toLocaleLowerCase().split(/[^A-Za-z0-9]/);
  let sol = "";
  split.forEach((element) => {
    let slice1 = element.slice(0, 1).toLocaleUpperCase();
    let slice2 = element.slice(1, element.length);

    sol += slice1 + slice2;
  });
  return sol;
}
