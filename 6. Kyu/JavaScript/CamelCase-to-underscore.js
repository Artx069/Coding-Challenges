"use strict";
/*
You wrote all your unit test names in camelCase. But some of your colleagues have troubles reading these long test names. So you make a compromise to switch to underscore separation.

To make these changes fast you wrote a class to translate a camelCase name into an underscore separated name.

Implement the ToUnderscore() method.

Example:

"ThisIsAUnitTest" => "This_Is_A_Unit_Test"

But of course there are always special cases...

You also have some calculation tests. Make sure the results don't get split by underscores. So only add an underscore in front of the first number.
*/
const toUnderScore = (name) => {
  while (
    name.match(/([a-z]+)([A-Z0-9])/) ||
    name.match(/([A-Z])([A-Z])/) ||
    name.match(/([0-9]+)([A-Z])/) ||
    name.match(/([A-Z])([0-9]+)/)
  ) {
    name = name
      .replace(/([a-z]+)([A-Z0-9])/g, "$1_$2")
      .replace(/([A-Z])([A-Z])/g, "$1_$2")
      .replace(/([0-9]+)([A-Z])/g, "$1_$2")
      .replace(/([A-Z])([0-9]+)/g, "$1_$2");
  }
  return name;
};
