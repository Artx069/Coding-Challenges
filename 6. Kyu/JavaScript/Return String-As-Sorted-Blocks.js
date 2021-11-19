"use strict";
/*
You will receive a string consisting of lowercase letters, uppercase letters and digits as input. Your task is to return this string as blocks separated by dashes ("-"). The elements of a block should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple instances of the same character. Elements should be put into the first suitable block.

The hierarchy is:

lowercase letters (a - z), in alphabetical order
uppercase letters (A - Z), in alphabetical order
digits (0 - 9), in ascending order
Examples
"21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
"abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
"" -> "" - an empty input should result in an empty output
"hbh420sUUW222IWOxndjn93cdop69NICEep832" -> "bcdehjnopsxCEINOUW0234689-dhnpIUW239-2-2-2" - a more sophisticated example
*/
function blocks(s) {
  let lowerCase = new Map();
  let UpperCase = new Map();
  let numbers = new Map();

  for (let char of s) {
    let asciiVal = char.charCodeAt(0);
    if (asciiVal >= 48 && asciiVal <= 57) {
      if (!numbers.has(char)) {
        numbers.set(char, 1);
      } else {
        numbers.set(char, numbers.get(char) + 1);
      }
    } else if (asciiVal >= 65 && asciiVal <= 90) {
      if (!UpperCase.has(char)) {
        UpperCase.set(char, 1);
      } else {
        UpperCase.set(char, UpperCase.get(char) + 1);
      }
    } else if (asciiVal >= 97 && asciiVal <= 122) {
      if (!lowerCase.has(char)) {
        lowerCase.set(char, 1);
      } else {
        lowerCase.set(char, lowerCase.get(char) + 1);
      }
    }
  }

  numbers = new Map(
    [...numbers].sort((a, b) => String(a[0]).localeCompare(b[0]))
  );
  UpperCase = new Map(
    [...UpperCase].sort((a, b) => String(a[0]).localeCompare(b[0]))
  );
  lowerCase = new Map(
    [...lowerCase].sort((a, b) => String(a[0]).localeCompare(b[0]))
  );

  let sol = [];
  let counter = 0;
  while (lowerCase.size > 0) {
    let array = [];
    if (sol.length > counter) {
      array = sol[counter];
    }
    for (let entry of lowerCase.keys()) {
      array.push(entry);
      if (lowerCase.get(entry) > 1) {
        lowerCase.set(entry, lowerCase.get(entry) - 1);
      } else {
        lowerCase.delete(entry);
      }
    }

    sol.push(array);

    counter++;
  }

  counter = 0;
  while (UpperCase.size > 0) {
    let array = [];
    for (let entry of UpperCase.keys()) {
      if (sol.length > counter) {
        array = sol[counter];
      }
      array.push(entry);
      if (UpperCase.get(entry) > 1) {
        UpperCase.set(entry, UpperCase.get(entry) - 1);
      } else {
        UpperCase.delete(entry);
      }
    }
    if (!(sol.length > counter)) {
      sol.push(array);
    }
    counter++;
  }

  counter = 0;
  while (numbers.size > 0) {
    let array = [];
    for (let entry of numbers.keys()) {
      if (sol.length > counter) {
        array = sol[counter];
      }
      array.push(entry);
      if (numbers.get(entry) > 1) {
        numbers.set(entry, numbers.get(entry) - 1);
      } else {
        numbers.delete(entry);
      }
    }
    if (!(sol.length > counter)) {
      sol.push(array);
    }
    counter++;
  }

  let solString = "";

  for (let entry of sol) {
    solString += entry.join("") + "-";
  }

  return solString.substring(0, solString.length - 1);
}
