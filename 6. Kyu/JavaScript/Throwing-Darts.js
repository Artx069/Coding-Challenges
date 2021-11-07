"use strict";
/*
You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140
*/
function scoreThrows(radii) {
  let points = [];

  for (let shot of radii) {
    if (shot < 5) {
      points.push(10);
    } else if (shot >= 5 && shot <= 10) {
      points.push(5);
    } else {
      points.push(0);
    }
  }

  let sumPoints = 0;

  for (let point of points) {
    sumPoints += point;
  }

  if (sumPoints == points.length * 10 && sumPoints !== 0) {
    sumPoints += 100;
  }

  return sumPoints;
}
