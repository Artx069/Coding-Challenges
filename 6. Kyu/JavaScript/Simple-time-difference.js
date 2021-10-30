"use strict";
/*
In this Kata, you will be given a series of times at which an alarm goes off. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not go off is 11 hours and 40 minutes.
In the second example, the alarm goes off 4 times in a day.

More examples in test cases. Good luck!
*/
function solve(arr) {
  let arrSec = [];

  function timeToSec(input) {
    let a = input.split(":"); // split it at the colons

    let seconds = +a[0] * 60 * 60 + +a[1] * 60;
    return seconds;
  }

  function secondsToTime(input) {
    var hours = Math.floor(input / 3600);
    var minutes = Math.floor((input - hours * 3600) / 60);

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
  }

  for (let e of arr) {
    arrSec.push(timeToSec(e));
  }

  arrSec.sort((a, b) => b - a);
  let biggestDifInSec = 0;

  for (let i = 1; i < arrSec.length; i++) {
    if (arrSec[i - 1] - arrSec[i] > biggestDifInSec) {
      biggestDifInSec = arrSec[i - 1] - arrSec[i];
    }
  }
  if (arr.length < 2) {
    return "23:59";
  }
  if (
    Math.abs(arrSec[0] - arrSec[arrSec.length - 1] - 86400) > biggestDifInSec
  ) {
    biggestDifInSec = Math.abs(arrSec[0] - arrSec[arrSec.length - 1] - 86400);
  }
  return secondsToTime(biggestDifInSec - 60);
}
