"use strict";
/* 
You are given a line from a movie subtitle file as a string.
The line consists of time interval when the text is shown:

start(hh:mm:ss,ms) --> stop(hh:mm:ss,ms)

and the text itself, for example:

01:09:02,684 --> 01:09:03,601 Run Forrest, run!

Your task is to write a function subs_offset_apply which takes such string and offset
(integer) in miliseconds as arguments, and returns the string with the offset applied.
Examples:

string = "01:09:02,684 --> 01:09:03,601 Run Forrest, run!"  
subs_offset_apply(string, 3663655)
output: "02:10:06,339 --> 02:10:07,256 Run Forrest, run!"

"00:43:22,074 --> 00:43:24,159 No, I am your father."
subs_offset_apply(string, 1789)   
output: "00:43:23,863 --> 00:43:25,948 No, I am your father." 

"00:03:06,241 --> 00:03:07,618 I'll be back."
subs_offset_apply(string, -21789) 
output: "00:02:44,452 --> 00:02:45,829 I'll be back."
Time constraints:

00:00:00,000 <= t <= 99:59:59,999

In case of too big negative or positive offset, which results in exceeding the constraints,
the function should return a string "Invalid offset".
You'll be given only valid strings.
Have Fun!
*/
function subsOffsetApply(string, offset) {
  let firstTime = string.substring(0, 12);
  let secondTime = string.substring(17, 29);
  let restStr = string.substring(30);
  let timeToMilSec = (input) => {
    let msStart = Number(input.substring(9));
    msStart += Number(input.substring(0, 2)) * 60 * 60 * 1000;
    msStart += Number(input.substring(3, 5)) * 60 * 1000;
    msStart += Number(input.substring(6, 8)) * 1000;
    return msStart;
  };

  function msToTime(duration) {
    var milliseconds = parseInt(duration % 1000),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt(duration / (1000 * 60 * 60));

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds =
      milliseconds.length != 3 ? pad(milliseconds, 3) : milliseconds;

    return hours + ":" + minutes + ":" + seconds + "," + milliseconds;
  }
  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  if (
    timeToMilSec(firstTime) + offset < 0 ||
    timeToMilSec(secondTime) + offset < 0 ||
    timeToMilSec(secondTime) + offset > 359999999
  ) {
    return "Invalid offset";
  }
  return (
    msToTime(timeToMilSec(firstTime) + offset) +
    " --> " +
    msToTime(timeToMilSec(secondTime) + offset) +
    " " +
    restStr
  );
}
