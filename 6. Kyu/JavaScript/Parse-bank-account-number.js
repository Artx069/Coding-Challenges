"use strict";
/*
 Returns the bank account number parsed from specified string.

 You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
 The machine scans the paper documents, and produces a string with a bank account that looks like this:

 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 Each string contains an account number written using pipes and underscores.
 Each account number should have at least one digit, all of which should be in the range 0-9.

 Your task is to write a function that can take bank account string and parse it into actual account numbers.

 @param {string} bankAccount
 @return {number}
Examples:


   '    _  _     _  _  _  _  _ \n'+
   '  | _| _||_||_ |_   ||_||_|\n'+     => 123456789
   '  ||_  _|  | _||_|  ||_| _|\n'

   ' _  _  _  _  _  _  _  _  _ \n'+
   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
   '|_||_  _||_| _||_|  ||_| _|\n',

   ' _  _  _  _  _  _  _  _  _ \n'+
   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
   '|_||_  _||_| _||_| _||_| _|\n',
*/
function parseBankAccount(bankAccount) {
  let map = new Map();

  map.set(" _ | ||_|", 0);
  map.set("     |  |", 1);
  map.set(" _  _||_ ", 2);
  map.set(" _  _| _|", 3);
  map.set("   |_|  |", 4);
  map.set(" _ |_  _|", 5);
  map.set(" _ |_ |_|", 6);
  map.set(" _   |  |", 7);
  map.set(" _ |_||_|", 8);
  map.set(" _ |_| _|", 9);

  let lines = bankAccount.split("\n");
  let arrayNums = [];
  for (let i = 0; i < lines[0].length / 3; i++) {
    let temp = [];
    arrayNums.push(temp);
  }
  lines.pop();
  for (let line of lines) {
    for (let i = 0; i < lines[0].length / 3; i++) {
      arrayNums[i].push(line.substring(0, 3));
      line = line.substring(3);
    }
  }
  for (let i = 0; i < arrayNums.length; i++) {
    arrayNums[i] = arrayNums[i].join("");
  }

  let output = "";

  for (let e of arrayNums) {
    output += map.get(e);
  }
  return Number(output);
}
