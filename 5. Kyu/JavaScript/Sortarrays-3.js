"use strict";
/*
This time the input is a sequence of course-ids that are formatted in the following way:

name-yymm
The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/
sortme = function (courses) {
  let map = new Map();

  for (let course of courses) {
    let seperator = course.indexOf("-");
    let key = course.substring(seperator + 1, course.length);
    map.set(key, []);
  }
  for (let course of courses) {
    let seperator = course.indexOf("-");
    let key = course.substring(seperator + 1, course.length);
    let value = course.substring(0, seperator);
    map.get(key).push(value);
  }
  const sortStringKeys = (a, b) => String(a[0]).localeCompare(b[0]);
  let mapSorted = new Map([...map].sort(sortStringKeys));

  let arrays = [];
  for (let key of mapSorted.keys()) {
    let array = [];
    for (let input of map.get(key)) {
      array.push(input);
    }
    array.sort();
    mapSorted.set(key, array);
  }
  let sol = [];
  for (let key of mapSorted.keys()) {
    for (let word of mapSorted.get(key)) {
      sol.push(word + "-" + key);
    }
  }
  return sol;
};
