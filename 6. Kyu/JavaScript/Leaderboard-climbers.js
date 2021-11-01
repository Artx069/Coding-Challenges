"use strict";
/*
In this kata you will be given a leaderboard of unique names for example:

['John',
 'Brian',
 'Jim',
 'Dave',
 'Fred']
Then you will be given a list of strings for example:

['Dave +1', 'Fred +4', 'Brian -1']
Then you sort the leaderboard.

The steps for our example would be:

# Dave up 1
['John',
 'Brian',
 'Dave',
 'Jim',
 'Fred']
# Fred up 4
['Fred',
 'John',
 'Brian',
 'Dave',
 'Jim']
# Brian down 1
['Fred',
 'John',
 'Dave',
 'Brian',
 'Jim']
Then once you have done this you need to return the leaderboard.

All inputs will be valid. All strings in the second list will never ask to move a name up higher or lower than possible eg. "John +3" could not be added to the end of the second input list in the example above.

The strings in the second list will always be something in the leaderboard followed by a space and a + or - sign followed by a number.
*/
function leaderboardSort(leaderboard, changes) {
  for (let entry of changes) {
    let split = entry.split(" ");

    let operator = split[1].substr(0, 1);
    let placesToChange = Number(split[1].substr(1));
    let positionInBoard = leaderboard.indexOf(split[0]);

    if (operator === "+") {
      let element = leaderboard[positionInBoard];
      leaderboard.splice(positionInBoard, 1);
      leaderboard.splice(positionInBoard - placesToChange, 0, element);
    } else {
      let element = leaderboard[positionInBoard];
      leaderboard.splice(positionInBoard, 1);
      leaderboard.splice(positionInBoard + placesToChange, 0, element);
    }
  }
  return leaderboard;
}
