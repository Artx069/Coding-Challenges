"use strict";
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/
function zero(arg) {
  return arg === undefined
    ? 0
    : arg[0] == "*"
    ? 0 * arg[1]
    : arg[0] == "/"
    ? 0 / arg[1]
    : arg[0] == "+"
    ? 0 + arg[1]
    : 0 - arg[1];
}
function one(arg) {
  return arg === undefined
    ? 1
    : arg[0] == "*"
    ? 1 * arg[1]
    : arg[0] == "/"
    ? Math.floor(1 / arg[1])
    : arg[0] == "+"
    ? 1 + arg[1]
    : 1 - arg[1];
}
function two(arg) {
  return arg === undefined
    ? 2
    : arg[0] == "*"
    ? 2 * arg[1]
    : arg[0] == "/"
    ? Math.floor(2 / arg[1])
    : arg[0] == "+"
    ? 2 + arg[1]
    : 2 - arg[1];
}
function three(arg) {
  return arg === undefined
    ? 3
    : arg[0] == "*"
    ? 3 * arg[1]
    : arg[0] == "/"
    ? Math.floor(3 / arg[1])
    : arg[0] == "+"
    ? 3 + arg[1]
    : 3 - arg[1];
}
function four(arg) {
  return arg === undefined
    ? 4
    : arg[0] == "*"
    ? 4 * arg[1]
    : arg[0] == "/"
    ? Math.floor(4 / arg[1])
    : arg[0] == "+"
    ? 4 + arg[1]
    : 4 - arg[1];
}
function five(arg) {
  return arg === undefined
    ? 5
    : arg[0] == "*"
    ? 5 * arg[1]
    : arg[0] == "/"
    ? Math.floor(5 / arg[1])
    : arg[0] == "+"
    ? 5 + arg[1]
    : 5 - arg[1];
}
function six(arg) {
  return arg === undefined
    ? 6
    : arg[0] == "*"
    ? 6 * arg[1]
    : arg[0] == "/"
    ? Math.floor(6 / arg[1])
    : arg[0] == "+"
    ? 6 + arg[1]
    : 6 - arg[1];
}
function seven(arg) {
  return arg === undefined
    ? 7
    : arg[0] == "*"
    ? 7 * arg[1]
    : arg[0] == "/"
    ? Math.floor(7 / arg[1])
    : arg[0] == "+"
    ? 7 + arg[1]
    : 7 - arg[1];
}
function eight(arg) {
  return arg === undefined
    ? 8
    : arg[0] == "*"
    ? 8 * arg[1]
    : arg[0] == "/"
    ? Math.floor(8 / arg[1])
    : arg[0] == "+"
    ? 8 + arg[1]
    : 8 - arg[1];
}
function nine(arg) {
  return arg === undefined
    ? 9
    : arg[0] == "*"
    ? 9 * arg[1]
    : arg[0] == "/"
    ? Math.floor(9 / arg[1])
    : arg[0] == "+"
    ? 9 + arg[1]
    : 9 - arg[1];
}

function plus(arg) {
  return ["+", arg];
}
function minus(arg) {
  return ["-", arg];
}
function times(arg) {
  return ["*", arg];
}
function dividedBy(arg) {
  return ["/", arg];
}
