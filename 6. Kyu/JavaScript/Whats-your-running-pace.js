"use strict";
/*
In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.

Create the following function:

runningPace(distance, time)

Where: distance - A float with the number of kilometres

time - A string containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. You don't have to deal with hours.

The function should return the pace, for example "4:20" means it took 4 minutes and 20 seconds to travel one kilometre.

Note: The pace should always return only the number of minutes and seconds. You don't have to convert these into hours. Floor the number of seconds.
*/
function runningPace(distance, time) {
  time = time
    .split(":")
    .map((x, i, _) => (i % 2 == 0 ? x * 60 : Number(x)))
    .reduce((a, b) => a + b);
  let sol =
    "" +
    Math.floor(time / distance / 60) +
    ":" +
    (Math.floor(time / distance) % 60).toString().padStart(2, "0");
  return sol;
}
