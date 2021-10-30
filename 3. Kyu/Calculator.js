"use strict";

/*
Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.
*/
const Calculator = function () {
  this.evaluate = (string) => {
    console.log(string);
    console.log("-".repeat(20));
    string = string.replace(/ /g, "");
    let operators = ["*", "/", "+", "-"];

    let math_it_up = {
      "+": function (x, y) {
        return x + y;
      },
      "-": function (x, y) {
        return x - y;
      },
      "*": function (x, y) {
        return x * y;
      },
      "/": function (x, y) {
        return x / y;
      },
    };

    for (let op of operators) {
      let strReg = "\\d[" + op + "]\\d+";
      while (string.match(new RegExp("\\d[" + op + "]\\d+"))) {
        if (string.match(new RegExp(strReg)) != null) {
          let part = string.match(new RegExp(strReg))[0];
          string = string.replace(
            new RegExp(strReg),
            part.substring(0, part.indexOf(op)) +
              " " +
              part.substring(part.indexOf(op), part.length)
          );
        }
      }
    }

    let split = string.split(" ");
    for (let i = 0; i < split.length; i++) {
      if (split[i].startsWith("*") || split[i].startsWith("/")) {
        let operator = split[i].substring(0, 1);
        let num = Number(split[i].substring(1, split[i].length));
        let numBefore = split[i - 1].match(/\d+(\.\d{1,2})?$/)
          ? parseFloat(split[i - 1])
          : parseInt(split[i - 1]);
        let sum = math_it_up[operator](numBefore, num);
        let indexNumBefore = split.indexOf(split[i]) - 1;

        split.splice(indexNumBefore, 2);
        split.splice(indexNumBefore, 0, sum + "");

        i--;
      }
    }

    for (let i = 0; i < split.length; i++) {
      if (split[i].startsWith("+") || split[i].startsWith("-")) {
        let operator = split[i].substring(0, 1);
        let num = Number(split[i].substring(1, split[i].length));
        let numBefore = split[i - 1].match(/\d+(\.\d{1,2})?$/)
          ? parseFloat(split[i - 1])
          : parseInt(split[i - 1]);
        let sum = math_it_up[operator](numBefore, num);
        let indexNumBefore = split.indexOf(split[i]) - 1;

        split.splice(indexNumBefore, 2);
        split.splice(indexNumBefore, 0, sum + "");
        i--;
      }
    }
    let sum = 0;
    for (let i = 0; i < split.length; i++) {
      sum += Number(split[i]);
    }

    return sum;
  };
};
