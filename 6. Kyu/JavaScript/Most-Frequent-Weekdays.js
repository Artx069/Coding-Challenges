"use strict";
/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']
*/
function mostFrequentDays(year) {
  const sorter = {
    7: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  let map = new Map();
  for (
    let i = new Date(year, 0, 1);
    i <= new Date(year, 11, 31);
    i.setDate(i.getDate() + 1)
  ) {
    let day = i.getDay();
    map.has(day) ? map.set(day, map.get(day) + 1) : map.set(day, 1);
  }
  let highestValue = 0;
  let entries = [];

  for (let key of map.keys()) {
    if (map.get(key) > highestValue) {
      highestValue = map.get(key);
    }
  }
  for (let key of map.keys()) {
    if (map.get(key) == highestValue) {
      entries.push(key);
    }
  }
  return entries
    .map((x) => (x == 0 ? 7 : x))
    .sort((a, b) => a - b)
    .map((x) => sorter[x]);
}
